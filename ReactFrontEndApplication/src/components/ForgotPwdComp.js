export default function ForgotPwdComp()
{ 
    return(
        <div>

    <h4 style={{color:'blue'}}>Reset Password</h4>
    <form>
        Enter User ID: 
        <input type="text" name="uid" required/>*<br/>
        <br/>
        Select Question: 

        <select name="question" required>
            <option placeholder="select">select</option>
            <option>what is your favourite color?</option>
            <option> who is your idol?</option>
            <option>what is your favourite sport?</option>
            <option>what is your pet's name?</option>
            <option>what is your nickname?</option>
            </select><br/>
            Answer:
            <input type="text" name="ans" ></input>
        <br/>
        
        <input type="submit" value="submit"/>
        <input type="reset" value="CANCEL"/>
        <br/>

        


    </form>
    </div>
    
    
    )
}