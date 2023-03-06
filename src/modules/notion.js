import dotenv from "dotenv";
import { Client } from "@notionhq/client"
dotenv.config();

const {
    NOTION_TOKEN,
    NOTION_DATABASE_ID
} = process.env;

export const notionClient = new Client({ auth: NOTION_TOKEN });
export const notionDataBaseID = NOTION_DATABASE_ID;