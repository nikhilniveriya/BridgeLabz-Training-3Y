
function runStage(stageName, callback) {
    setTimeout(() => {
        console.log(stageName + " completed");
        callback();
    }, 1000);
}


function runWithCallbacks() {
    console.log("Starting callback pipeline...");

    runStage("Design", () => {
        runStage("Build", () => {
            runStage("Test", () => {
                runStage("Deploy", () => {
                    runStage("Celebrate", () => {
                        console.log("Callback pipeline completed!");
                    });
                });
            });
        });
    });
}


function runStagePromise(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName + " completed");
            resolve();
        }, 1000);
    });
}


async function runWithAsyncAwait() {
    console.log("Starting async/await pipeline...");

    await runStagePromise("Design");
    await runStagePromise("Build");
    await runStagePromise("Test");
    await runStagePromise("Deploy");
    await runStagePromise("Celebrate");

    console.log("Async/await pipeline completed!");
}


runWithCallbacks();


