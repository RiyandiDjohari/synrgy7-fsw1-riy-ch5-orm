import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("comments").del();

    // Inserts seed entries
    await knex("comments").insert([
        { id: 1, article_id: 1, description: 'Comments 1 For Article 1'},
        { id: 2, article_id: 1, description: 'Comments 2 For Article 1'},
        { id: 3, article_id: 2, description: 'Comments 1 For Article 2'},
        { id: 4, article_id: 2, description: 'Comments 2 For Article 2'},
    ]);
};
