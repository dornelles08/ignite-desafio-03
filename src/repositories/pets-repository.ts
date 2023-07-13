import { Pet, Prisma } from "@prisma/client";

export interface PetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>;
  findById(id: string): Promise<Pet | null>;
  findManyByCity(city: string, page: number): Promise<Pet[]>;
  findManyByCharacteristics(
    characteristics: string[],
    city: string,
    page: number
  ): Promise<Pet[]>;
}
