#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from 'yargs/helpers'
import { getTasks, archiveTask } from "./commands/clean-todo-list.js"

const ARCHIVE_TASKS_OPTIONS = (yargs) => {
    return {}
}

yargs(hideBin(process.argv))
    .command('tasks:archive', 'Archive all tasks in the board', ARCHIVE_TASKS_OPTIONS, () => {
        getTasks()
        .then(async (tasks) => {
                const { results } = tasks;
                const archiveTasksPromise = results.map(task => archiveTask(task.id));

                await Promise.allSettled(archiveTasksPromise);
                console.log("Done!")
            })
            .catch(err => {
                const { code, status, body } = err;
                console.error({
                    status,
                    code,
                    body
                });
            });
    })
    .command('fur <url>', 'fetchaa the contaents of thae URL', () => { }, (argv) => {
        console.info(argv)
    })
    .help()
    .argv

