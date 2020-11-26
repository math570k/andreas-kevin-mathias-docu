import { Organization } from './../entity/Organization';
import { User } from './../entity/User';
import { Arg, Mutation, Resolver, Query, InputType, Field, Int } from "type-graphql";


@InputType()
class IOrganizationType {
    @Field()
    name: string

    @Field(() => String, { nullable: false })
    logo: string
}

@InputType()
class IDescriptionType {
    @Field(() => String, { nullable: true })
    name?: string;
  
    @Field(() => String, { nullable: true })
    logo?: string;
}

@Resolver()
export class OrganizationResolver {

    // Create
    @Mutation(() => Boolean)
    async createOrganization(
        @Arg("user_id", () => Int) user_id : number,
        @Arg("organization", () => IOrganizationType) organization : IOrganizationType
    ) : Promise<boolean | undefined> {

        let org = await Organization.create(organization);
        
        const user = await User.findOne({id: user_id}) as User;
        
        org.administrators = [user];
        org = await Organization.save(org);

        return true
    }

    // Read
    @Query(() => [Organization])
    Organizations() : Promise<Organization[]> {
        return Organization.find();
    }
    
    // Update
    @Mutation(() => Boolean)
    async updateOrganization(
        @Arg("id", () => Int) id: number,
        @Arg("description", () => IDescriptionType) description: IDescriptionType
    ) : Promise<boolean> {
        await Organization.update({ id }, description);
        return true
    }

    // Delete
    @Mutation(() => Boolean)
    async deleteOrganization(@Arg("id", () => Int) id: number): Promise<boolean> {
      await Organization.delete({ id });
      return true;
    }
}