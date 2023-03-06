import { notionClient, notionDataBaseID } from "../modules/notion.js";


export function archiveTask(pageId) {
    return notionClient.pages.update({
        page_id: pageId,
        archived: true
    })
}

export function getTasks() {
    return notionClient.databases.query({
        database_id: notionDataBaseID,
        filter: {
            property: "Status",
            status: {
                equals: "Not Started",
            }
        }
    });
}
