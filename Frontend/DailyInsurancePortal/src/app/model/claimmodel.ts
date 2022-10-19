import { Policymodel } from "./policymodel";
//fix here for validating policy--id with claim--add date to policy model
export class Claimmodel {
    user_id!:number;
    policy_id!:number;
    purchase_dttm!:Date;
    claim_dttm!:Date;
    claim_status!:string;
    claim_amount!:number;

}
