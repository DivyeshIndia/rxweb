import {  email, } from   "@rxweb/reactive-form-validators"   
 
export class User {

	@email() 
	email: string;

	//If you want to apply conditional expression of type 'string'
	@email({conditionalExpression:'x => x.email =="bharat.patel@gmail.com"' }) 
	businessEmailAddress: string;

	//If you want to apply conditional expression of type 'function'
	@email({conditionalExpression:(x,y) => x.email == "bharat.patel@gmail.com"  }) 
	recoveryEmailAddress: string;

}
