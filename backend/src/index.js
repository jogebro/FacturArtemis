import app from "./app.js";

const main = () => {
    app.listen(app.get("port"))
    console.log(`The great server is runnig on port ${app.get("port")}`);
}

main();