const system = {
    isRooted: false,
    files: {
        'core': 'System Kernel v1.0',
        'logs': 'No suspicious activity detected.',
        'config': 'Access: Restricted'
    }
};

const terminalInput = document.getElementById('terminal-input');
const statusText = document.getElementById('status-text');

terminalInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const [action, ...args] = terminalInput.value.toLowerCase().split(' ');
        executeCommand(action, args[0]);
        terminalInput.value = '';
    }
});

function executeCommand(action, arg) {
    switch(action) {
        // 1. JAILBREAK SIMULATION
        case 'jailbreak':
            system.isRooted = true;
            statusText.innerText = "ROOTED (Exploit Active)";
            document.body.style.backgroundColor = "#051205"; // Subtle hacker green tint
            alert("Exploit successful. System privileges escalated.");
            break;

        // 2. STATUS/DASHBOARD
        case 'status':
            alert(`Current State: ${system.isRooted ? 'ROOTED' : 'LOCKED'}\nSystem load: Normal`);
            break;

        // 3. NAVIGATION / FILE MANAGEMENT
        case 'open':
            if (system.files[arg]) {
                document.getElementById('content-area').innerText = `File: ${arg}\nContent: ${system.files[arg]}`;
            } else {
                alert("File not found or access denied.");
            }
            break;

        default:
            alert("Unknown command.");
    }
}