import { Prisma, PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

export const extendPrismaClient = (
  client: PrismaClient,
  { saltRounds, fileHost }: { saltRounds: number; fileHost: string },
) => {
  const mayHashField = async (obj: {
    hashedPassword?: string | Prisma.StringFieldUpdateOperationsInput;
  }) => {
    if (!obj.hashedPassword) return;

    if (typeof obj.hashedPassword === 'string') {
      obj.hashedPassword = await hash(obj.hashedPassword, saltRounds);
    } else {
      obj.hashedPassword.set = await hash(obj.hashedPassword.set, saltRounds);
    }
  };

  return client.$extends({
    query: {
      user: {
        async upsert({ args, query }) {
          if (args.create.hashedPassword) {
            await mayHashField(args.create);
          }

          if (args.update.hashedPassword) {
            await mayHashField(args.update);
          }

          return query(args);
        },

        async create({ args, query }) {
          if (args.data.hashedPassword) {
            await mayHashField(args.data);
          }

          return query(args);
        },

        async update({ args, query }) {
          if (args.data.hashedPassword) {
            await mayHashField(args.data);
          }

          return query(args);
        },
      },
    },
    result: {
      file: {
        url: {
          needs: {
            id: true,
          },
          compute: (file) => `http://${fileHost}/files/static/${file.id}`,
        },
      },
    },
    model: {
      $allModels: {
        findManyAndCount<Model, Args>(
          this: Model,
          args: Prisma.Exact<Args, Prisma.Args<Model, 'findMany'>>,
        ): Promise<[Prisma.Result<Model, Args, 'findMany'>, number]> {
          return client.$transaction([
            (this as any).findMany(args),
            (this as any).count({ where: (args as any).where }),
          ]) as any;
        },
      },
    },
  });
};
