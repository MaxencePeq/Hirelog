import "dotenv/config";
import { fakerFR as faker } from "@faker-js/faker";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.user.deleteMany();
  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        passwordHash: "pas encore de hash",
        candidatures: {
          create: Array.from(
            { length: faker.number.int({ min: 1, max: 5 }) },
            () => ({
              company: faker.company.name(),
            }),
          ),
        },
      },
    });
  }
  const NbCandidature = await prisma.candidature.count();
  const NbUser = await prisma.user.count();
  console.log("Nb user : " + NbUser + " ||  Nb Candidature : " + NbCandidature);
}

main().finally(() => prisma.$disconnect());
