import { Test, TestingModule } from '@nestjs/testing';
import { PropertyTypesResolver } from './property-types.resolver';

describe('PropertyTypesResolver', () => {
  let resolver: PropertyTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyTypesResolver],
    }).compile();

    resolver = module.get<PropertyTypesResolver>(PropertyTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
