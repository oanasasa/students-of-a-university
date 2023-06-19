import Header from "../components/layout.header";
import "../App.css";
import Student from "../components/student.component";

export default function HomePage() {
  // function createNewStudent() {
  //   console.log("hi");
  // }

  return (
    <>
      <Header />
      <div id="homePage">
        <h1>See all users:</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Degree</th>
            <th>Specialization</th>
            <th>Age of studing</th>
            <th>Score</th>
          </tr>
          <tr>
            {" "}
            <Student />
          </tr>
          <tr>
            <Student />
          </tr>
        </table>
      </div>
    </>
  );
}
