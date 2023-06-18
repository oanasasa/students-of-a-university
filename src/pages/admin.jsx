export default async function Admin() {
  const students = await prisma.student.findMany();

  return (
    <section>
      <ul>{}</ul>
    </section>
  );
}
