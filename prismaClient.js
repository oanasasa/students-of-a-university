import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function main() {
  // await prisma.student.create({
  //   data: {
  //     name: "Emilia",
  //     email: "emilia@test.com",
  //     degree: "master",
  //     specialization: "Computer Science",
  //     age_of_studing: 2,
  //     score: 8.76,
  //   },
  // });
  console.log("DB Connected");

  //   async function deleteStudent() {
  //     await prisma.student.delete({
  //       where: {
  //         email: "",
  //       },
  //     });
  //   }

  //   const students = await prisma.student.findMany();
  //   console.log(students);

  const student = await prisma.student.findUnique({
    where: {
      email: "emilia@test.com",
    },
  });
  console.log(student);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
