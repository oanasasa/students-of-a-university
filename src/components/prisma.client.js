import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const students = prisma.student.findMany();
  console.log(students);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
