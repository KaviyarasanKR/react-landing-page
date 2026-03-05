import "./login.css";

function Login() {
  return (
    <div className="login-wrapper">

      <form className="login-form">
    
        <div className="row">
          <div className="input-group">
            <label>FULL NAME</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div className="input-group">
            <label>PHONE NUMBER</label>
            <input type="text" placeholder="phone number" />
          </div>
        </div>

        <div className="input-group">
          <label>EMAIL ADDRESS</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="radio-group">
          <label>I AM A...</label>

          <div className="radio-options">
            <label><input type="radio" name="role"/> User / Rider</label>
            <label><input type="radio" name="role"/> Driver</label>
            <label><input type="radio" name="role"/> Business Partner</label>
          </div>
        </div>

        <div className="input-group">
          <label>FEATURE INTEREST</label>
          <select>
            <option>Select your interested feature</option>
            <option>Ride Booking</option>
            <option>Driver Registration</option>
            <option>Business Partnership</option>
          </select>
        </div>

        <div className="input-group">
          <label>ADDITIONAL FEEDBACK (OPTIONAL)</label>
          <textarea placeholder="Share your thoughts or specific requirements..."></textarea>
        </div>

        <button className="submit-btn">Submit Registration</button>

      </form>

    </div>
  );
}

export default Login;