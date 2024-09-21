import { InputType, PartialType } from '@nestjs/graphql';
import { CreatePropertyInput } from './create-property.args';

@InputType()
export class UpdatePropertyInput extends PartialType(CreatePropertyInput) {}
