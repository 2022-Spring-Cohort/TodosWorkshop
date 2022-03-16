
export default {
    SetupFooter
}


function SetupFooter(){

    let today = new Date();

    let date = today.getFullYear();

    return `
        <div>
            <p>&copy; ${date}</p>
        </div>
    `;
}