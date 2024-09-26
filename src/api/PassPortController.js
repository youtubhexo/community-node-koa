import svgCaptcha from 'svg-captcha';

class PassPortController{
   
    constructor(){}
    async getCaptcha(ctx){
         const captcha = svgCaptcha.create();
         

         const text=captcha.text
         console.log(text);
        
         ctx.body={"msg":captcha.data}

    }


   

}

export default new PassPortController()
