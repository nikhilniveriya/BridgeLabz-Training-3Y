
function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(serverName + " deployment failed."));
            } else {
                console.log(serverName + " deployment completed.");
                resolve(serverName);
            }
        }, delay);
    });
}

const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.error("Deployment error:", error.message);
    });

Promise.race([
    deployServer("Server A (Race)", 2000),
    deployServer("Server B (Race)", 3000)
])
    .then((server) => {
        console.log("Fastest response:", server);
    })
    .catch((error) => {
        console.error("Race failed:", error.message);
    });
