import { Prisma } from '@prisma/client';

export interface CreatePropertyDto
  extends Pick<Prisma.PropertyCreateInput, 'name' | 'uniqueCode'> {
  type: {
    id?: string;
    name?: string;
    description?: string;
  };
}
