import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("articles").del();

    // Inserts seed entries
    await knex("articles").insert([
        { id: 1, title: "Book 1", body: "Lorem Ipsum dolor sit amet 1", isApproved: true },
        { id: 2, title: "Book 2", body: "Lorem Ipsum dolor sit amet 2", isApproved: true },
        { id: 3, title: "Book 3", body: "Lorem Ipsum dolor sit amet 3", isApproved: true },
    ]);
};
