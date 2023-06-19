export default function RegisterPage() {
  return (
    <div id="registerPage">
      <h1>Add a new Student</h1>
      <div>
        <form>
          <div class="form-field">
            <p>Student's Full Name</p>
            <input type="text" name="name" />
          </div>
          <div class="form-field">
            <p>Student's Degree</p>
            <input type="text" name="degree" />
          </div>
          <div class="form-field">
            <p>Student's University</p>
            <input type="text" name="university" />
          </div>
          <div class="form-field">
            <p>Student's Specialization</p>
            <input type="text" name="specialization" />
          </div>
          <div class="form-field">
            <p>Student's Age of Studing</p>
            <input type="number" name="age-of-studing" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
