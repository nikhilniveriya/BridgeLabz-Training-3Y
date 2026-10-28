
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject(new Error("Bug API request failed."));
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }
        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.log("Bug Tracker Results:");
        console.table(bugs.map((bug, index) => ({
            "S.No.": index + 1,
            "Bug Description": bug
        })));
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
