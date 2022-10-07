import ReCAPTCHA from 'react-google-recaptcha'



const Recaptcha= (props) => {


  function onChange(value) {
    console.log('Captcha value:', value);

    const button = document.getElementById("login_btn")
    if(value === undefined){
      button.disabled= true
    }else{
      button.removeAttribute("disabled");
    }
  }


  return (
    <div className="captcha">
      <ReCAPTCHA
        sitekey="6Lcyx14iAAAAACE23TXwyg0KjlXhbhyuQ96lMV3Y"
        onChange={onChange}
    
      />
    </div>
  );
};
export default Recaptcha;