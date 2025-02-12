const questions = [
    // OSI Model and Network Fundamentals (1-10)
        {
            question: "What layer of the OSI model is responsible for end-to-end data delivery and handles logical addressing?",
            options: [
                "Layer 2 - Data Link Layer",
                "Layer 3 - Network Layer",
                "Layer 4 - Transport Layer",
                "Layer 5 - Session Layer"
            ],
            answer: "Layer 3 - Network Layer"
        },
        {
            question: "Which OSI layer is responsible for converting data into binary format (1s and 0s)?",
            options: [
                "Physical Layer",
                "Data Link Layer",
                "Network Layer",
                "Presentation Layer"
            ],
            answer: "Physical Layer"
        },
        {
            question: "What protocol operates at the Transport layer and provides reliable, connection-oriented communication?",
            options: [
                "IP",
                "TCP",
                "UDP",
                "HTTP"
            ],
            answer: "TCP"
        },
        {
            question: "Which layer of the OSI model handles encryption and data formatting?",
            options: [
                "Session Layer",
                "Transport Layer",
                "Presentation Layer",
                "Application Layer"
            ],
            answer: "Presentation Layer"
        },
        {
            question: "What is the main function of the Data Link Layer?",
            answer: "To provide reliable point-to-point data delivery over a physical layer and handle MAC addressing"
        },
        {
            question: "What is encapsulation in the context of the OSI model?",
            answer: "The process of wrapping data with protocol information as it moves down the OSI layers"
        },
        {
            question: "Which OSI layer is responsible for establishing, maintaining, and terminating sessions between applications?",
            answer: "Layer 5 - Session Layer"
        },
        {
            question: "What is the PDU (Protocol Data Unit) called at the Network Layer?",
            options: [
                "Frame",
                "Packet",
                "Segment",
                "Bit"
            ],
            answer: "Packet"
        },
        {
            question: "Which layer of the OSI model adds source and destination port numbers to data?",
            answer: "Layer 4 - Transport Layer"
        },
        {
            question: "What is the primary function of the Application Layer in the OSI model?",
            answer: "To provide network services directly to end-users' applications"
        },

        // IP Addressing and Subnetting (11-20)
        {
            question: "What is the subnet mask for a default Class C network?",
            options: [
                "255.0.0.0",
                "255.255.0.0",
                "255.255.255.0",
                "255.255.255.255"
            ],
            answer: "255.255.255.0"
        },
        {
            question: "How many usable host addresses are available in a /24 subnet?",
            options: [
                "254",
                "256",
                "252",
                "248"
            ],
            answer: "254"
        },
        {
            question: "Which IP address range is reserved for private networks in Class A?",
            options: [
                "10.0.0.0 to 10.255.255.255",
                "172.16.0.0 to 172.31.255.255",
                "192.168.0.0 to 192.168.255.255",
                "169.254.0.0 to 169.254.255.255"
            ],
            answer: "10.0.0.0 to 10.255.255.255"
        },
        {
            question: "What is the broadcast address for the network 192.168.1.0/24?",
            answer: "192.168.1.255"
        },
        {
            question: "In IPv6, how many bits make up the address?",
            options: [
                "32 bits",
                "64 bits",
                "128 bits",
                "256 bits"
            ],
            answer: "128 bits"
        },
        {
            question: "What is CIDR notation used for?",
            answer: "To specify IP addresses and their associated routing prefix"
        },
        {
            question: "Which special IP address is used to represent the loopback interface?",
            answer: "127.0.0.1"
        },
        {
            question: "What is the purpose of a default gateway?",
            answer: "To route traffic from a local network to other networks or the internet"
        },
        {
            question: "What is the first octet range for Class B IP addresses?",
            options: [
                "1-126",
                "128-191",
                "192-223",
                "224-239"
            ],
            answer: "128-191"
        },
        {
            question: "What does APIPA stand for and when is it used?",
            answer: "Automatic Private IP Addressing - used when a DHCP server is unavailable to automatically assign an IP in the 169.254.x.x range"
        },

        // Network Devices and Hardware (21-30)
        {
            question: "What is the difference between a hub and a switch?",
            answer: "A hub broadcasts data to all ports while a switch forwards data only to the specific destination port"
        },
        {
            question: "What is the primary function of a Layer 3 switch?",
            answer: "To combine the functionality of a switch and router, performing both switching and routing functions"
        },
        {
            question: "What is a VLAN and what is its primary purpose?",
            answer: "A Virtual LAN is a logical network segment that groups devices together regardless of physical location, used to improve security and network management"
        },
        {
            question: "What is the maximum length of a Cat5e cable before signal degradation occurs?",
            options: [
                "50 meters",
                "100 meters",
                "150 meters",
                "200 meters"
            ],
            answer: "100 meters"
        },
        {
            question: "What is the purpose of a network patch panel?",
            answer: "To organize and manage network cables and provide a centralized point for connecting different network segments"
        },
        {
            question: "What is the difference between a managed and unmanaged switch?",
            answer: "A managed switch can be configured and monitored while an unmanaged switch works out of the box with no configuration options"
        },
        {
            question: "What is the purpose of STP (Spanning Tree Protocol)?",
            answer: "To prevent network loops in networks with redundant paths while maintaining backup paths"
        },
        {
            question: "What is the function of a network interface card (NIC)?",
            answer: "To connect a computer to a network and provide the hardware interface for network communications"
        },
        {
            question: "What type of cable should be used for direct connection between two computers without a switch?",
            options: [
                "Straight-through cable",
                "Crossover cable",
                "Rollover cable",
                "Fiber optic cable"
            ],
            answer: "Crossover cable"
        },
        {
            question: "What is Power over Ethernet (PoE) used for?",
            answer: "To supply electrical power to network devices through the Ethernet cable"
        },

        // Network Services (31-40)
        {
            question: "What is the default port number for DNS?",
            options: [
                "21",
                "23",
                "53",
                "80"
            ],
            answer: "53"
        },
        {
            question: "What are the stages of the DHCP process?",
            answer: "DORA - Discovery, Offer, Request, Acknowledgment"
        },
        {
            question: "What is the purpose of a DHCP relay agent?",
            answer: "To forward DHCP broadcasts between DHCP clients and servers on different subnets"
        },
        {
            question: "What is the difference between authoritative and non-authoritative DNS servers?",
            answer: "Authoritative DNS servers host original zone records, while non-authoritative servers cache records from other servers"
        },
        {
            question: "What is a DNS MX record used for?",
            answer: "To specify the mail servers responsible for accepting email messages for a domain"
        },
        {
            question: "What is the purpose of a DHCP reservation?",
            answer: "To ensure a specific device always receives the same IP address from the DHCP server"
        },
        {
            question: "What is split DNS and why is it used?",
            answer: "A DNS configuration where different answers are provided based on the source of the query, often used for internal vs external name resolution"
        },
        {
            question: "What protocol is used by DHCP to assign IP addresses?",
            options: [
                "TCP",
                "UDP",
                "ICMP",
                "HTTP"
            ],
            answer: "UDP"
        },
        {
            question: "What is a DNS PTR record used for?",
            answer: "To map an IP address to a domain name (reverse DNS lookup)"
        },
        {
            question: "What is the purpose of a DHCP scope?",
            answer: "To define the range of IP addresses that can be assigned to clients by the DHCP server"
        },

        // Wireless Networking (41-50)
        {
            question: "What is the difference between WPA2 and WPA3?",
            answer: "WPA3 provides stronger encryption and improved security features including protection against brute force attacks and forward secrecy"
        },
        {
            question: "What is the maximum theoretical speed of 802.11ax (Wi-Fi 6)?",
            options: [
                "1.2 Gbps",
                "3.5 Gbps",
                "9.6 Gbps",
                "14.4 Gbps"
            ],
            answer: "9.6 Gbps"
        },
        {
            question: "What is the purpose of MIMO technology in wireless networks?",
            answer: "To use multiple antennas to transmit and receive data simultaneously, increasing throughput and reliability"
        },
        {
            question: "What are the primary frequency bands used by Wi-Fi networks?",
            options: [
                "2.4 GHz and 5 GHz",
                "3.4 GHz and 6 GHz",
                "1.8 GHz and 4 GHz",
                "900 MHz and 3 GHz"
            ],
            answer: "2.4 GHz and 5 GHz"
        },
        {
            question: "What is channel bonding in wireless networks?",
            answer: "The combination of two or more channels to increase bandwidth and throughput"
        },
        {
            question: "What is roaming in wireless networks?",
            answer: "The ability of a wireless client to maintain connection while moving between access points"
        },
        {
            question: "What is the purpose of a wireless site survey?",
            answer: "To analyze wireless coverage, interference, and optimal access point placement in a physical location"
        },
        {
            question: "What is the difference between an omnidirectional and directional antenna?",
            answer: "Omnidirectional antennas broadcast in all directions while directional antennas focus the signal in a specific direction"
        },
        {
            question: "What is beacon frame in wireless networks?",
            answer: "A frame transmitted by access points to announce their presence and provide network information"
        },
        {
            question: "What is the purpose of WPS (Wi-Fi Protected Setup)?",
            answer: "To simplify the process of connecting devices to a secure wireless network"
        },   
// Network Security (51-60 continued)
        {
            question: "What is the difference between a stateful and stateless firewall?",
            answer: "A stateful firewall tracks the state of network connections while a stateless firewall evaluates each packet independently"
        },
        {
            question: "What is an IDS (Intrusion Detection System)?",
            answer: "A system that monitors network traffic for suspicious activity and potential security breaches"
        },
        {
            question: "What is the purpose of network segmentation?",
            answer: "To divide a network into smaller segments for improved security, performance, and management"
        },
        {
            question: "What is a DMZ (Demilitarized Zone)?",
            answer: "A network segment that contains public-facing services and acts as a buffer between internal and external networks"
        },
        {
            question: "What is the difference between symmetric and asymmetric encryption?",
            answer: "Symmetric encryption uses the same key for encryption and decryption, while asymmetric encryption uses different keys for each operation"
        },
        {
            question: "What is a man-in-the-middle attack?",
            answer: "An attack where the attacker secretly relays and possibly alters communication between two parties"
        },
        {
            question: "What is the purpose of an ACL (Access Control List)?",
            answer: "To control network traffic by defining rules that permit or deny packets based on specific criteria"
        },
        {
            question: "What is SSL/TLS and what is it used for?",
            answer: "Security protocols that provide encryption and authentication for network communications, commonly used for secure web browsing (HTTPS)"
        },
        {
            question: "What is a honeypot in network security?",
            answer: "A system designed to attract and trap potential attackers to study their methods and protect real network resources"
        },
        {
            question: "What is the purpose of network access control (NAC)?",
            answer: "To enforce security policies by controlling access to network resources based on device identity and security status"
        },

        // Cloud Computing and Virtualization (61-70)
        {
            question: "What is the difference between IaaS, PaaS, and SaaS?",
            answer: "IaaS provides infrastructure, PaaS provides development platforms, and SaaS provides ready-to-use software applications"
        },
        {
            question: "What is a virtual machine (VM)?",
            answer: "A software-based computer that runs on physical hardware and can host its own operating system"
        },
        {
            question: "What is container virtualization?",
            answer: "A lightweight form of virtualization that packages applications and their dependencies to run in isolated environments"
        },
        {
            question: "What is the purpose of load balancing in cloud environments?",
            answer: "To distribute workloads across multiple computing resources to optimize resource use and improve reliability"
        },
        {
            question: "What is cloud bursting?",
            answer: "The practice of extending local infrastructure to cloud resources during peak demand periods"
        },
        {
            question: "What is the difference between public and private cloud?",
            answer: "Public cloud services are shared resources available over the internet, while private cloud services are dedicated to a single organization"
        },
        {
            question: "What is hybrid cloud?",
            answer: "A combination of public and private cloud infrastructures that allows data and applications to be shared between them"
        },
        {
            question: "What is the purpose of auto-scaling in cloud computing?",
            answer: "To automatically adjust computing resources based on demand to maintain performance and minimize costs"
        },
        {
            question: "What is edge computing?",
            answer: "Processing data near the edge of the network where it is generated instead of in a centralized cloud location"
        },
        {
            question: "What is serverless computing?",
            answer: "A cloud computing model where the cloud provider manages the infrastructure and automatically allocates resources as needed"
        },

        // Network Protocols and Services (71-80)
        {
            question: "What is the purpose of SNMP?",
            answer: "To monitor and manage network devices and their functions"
        },
        {
            question: "What is the difference between TCP and UDP?",
            answer: "TCP is connection-oriented and reliable, while UDP is connectionless and doesn't guarantee delivery"
        },
        {
            question: "What is the purpose of ICMP?",
            answer: "To send error messages and operational information about network conditions"
        },
        {
            question: "What protocol is used for secure remote access to network devices?",
            options: [
                "Telnet",
                "SSH",
                "HTTP",
                "FTP"
            ],
            answer: "SSH"
        },
        {
            question: "What is the purpose of ARP?",
            answer: "To map IP addresses to MAC addresses in a local network"
        },
        {
            question: "What is the default port for HTTPS?",
            options: [
                "80",
                "443",
                "8080",
                "8443"
            ],
            answer: "443"
        },
        {
            question: "What is the purpose of NTP?",
            answer: "To synchronize the clocks of network devices"
        },
        {
            question: "What is multicast routing?",
            answer: "A method to efficiently deliver the same data to multiple recipients simultaneously"
        },
        {
            question: "What is the purpose of RADIUS?",
            answer: "To provide centralized authentication, authorization, and accounting management for network access"
        },
        {
            question: "What is the difference between SMTP and POP3?",
            answer: "SMTP is used for sending email while POP3 is used for receiving email"
        },

        // Network Troubleshooting (81-90)
        {
            question: "What is the first step in troubleshooting a network connectivity issue?",
            answer: "Verify physical connectivity and check if the network interface is enabled and properly configured"
        },
        {
            question: "What command is used to test connectivity to another host?",
            options: [
                "ipconfig",
                "tracert",
                "ping",
                "nslookup"
            ],
            answer: "ping"
        },
        {
            question: "What tool is used to view the path that packets take to reach a destination?",
            options: [
                "ping",
                "tracert/traceroute",
                "nslookup",
                "netstat"
            ],
            answer: "tracert/traceroute"
        },
        {
            question: "What does high latency in a network indicate?",
            answer: "Delays in data transmission, often caused by network congestion, distance, or hardware issues"
        },
        {
            question: "What command shows the active network connections on a system?",
            options: [
                "ipconfig",
                "netstat",
                "route",
                "arp"
            ],
            answer: "netstat"
        },
        {
            question: "What are common causes of packet loss?",
            answer: "Network congestion, faulty hardware, network errors, and security devices dropping packets"
        },
        {
            question: "How can you determine if DNS resolution is working properly?",
            answer: "Use nslookup or dig commands to test DNS name resolution"
        },
        {
            question: "What is network baseline documentation used for?",
            answer: "To establish normal network performance metrics for comparison during troubleshooting"
        },
        {
            question: "What does the command 'ipconfig /flushdns' do?",
            answer: "Clears the local DNS resolver cache"
        },
        {
            question: "What are symptoms of a broadcast storm?",
            answer: "High network utilization, slow network performance, and increased latency due to excessive broadcast traffic"
        },

        // Network Design and Documentation (91-100)
        {
            question: "What is the purpose of network documentation?",
            answer: "To maintain records of network configuration, topology, and changes for troubleshooting and planning"
        },
        {
            question: "What should be included in a network diagram?",
            answer: "Device locations, IP addressing, connections, VLANs, and other relevant network information"
        },
        {
            question: "What is the 3-tier network design model?",
            answer: "A hierarchical design with core, distribution, and access layers"
        },
        {
            question: "What is redundancy in network design?",
            answer: "Implementation of backup components and paths to ensure network availability in case of failures"
        },
        {
            question: "What is the purpose of a change management process?",
            answer: "To control and document network changes to minimize disruption and maintain stability"
        },
        {
            question: "What is network capacity planning?",
            answer: "The process of determining future network requirements based on current usage and growth projections"
        },
        {
            question: "What is the importance of labeling in network infrastructure?",
            answer: "To facilitate troubleshooting, maintenance, and changes by clearly identifying network components"
        },
        {
            question: "What should be included in a network baseline document?",
            answer: "Normal performance metrics, configuration settings, and network utilization patterns"
        },
        {
            question: "What is the purpose of a network recovery plan?",
            answer: "To define procedures for restoring network services after a failure or disaster"
        },
        {
            question: "What are the key considerations when designing a wireless network?",
            answer: "Coverage area, capacity requirements, interference sources, security, and user density"
        }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;
let timerEnabled = false;

function startQuiz() {
    const name = document.getElementById('name').value.trim();
    if (name) {
        document.getElementById('nameInput').style.display = 'none';
        document.getElementById('timerOption').style.display = 'block';
    } else {
        alert("Please enter your name.");
    }
}

function startTimerQuiz() {
    timerEnabled = true;
    startQuizSession();
}

function startNoTimerQuiz() {
    timerEnabled = false;
    startQuizSession();
}

function startQuizSession() {
    document.getElementById('timerOption').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('optionsContainer');
    const answerElement = document.getElementById('answer');
    
    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
    updateProgress();
    
    questionElement.textContent = question.question;
    optionsContainer.innerHTML = '';
    answerElement.style.display = 'none';
    
    if (question.options) {
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            optionDiv.onclick = () => selectOption(index);
            optionsContainer.appendChild(optionDiv);
        });
    }
    
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').textContent = 
        currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next';
    
    document.getElementById('showAnswerBtn').style.display = 'block';

    if (timerEnabled) {
        resetTimer();
    }
}

function selectOption(index) {
    const options = document.querySelectorAll('.option');
    const question = questions[currentQuestionIndex];
    
    options.forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    options[index].classList.add('selected');
    
    if (question.options && question.options[index] === question.answer) {
        options[index].classList.add('correct');
        score++;
        updateScore();
    } else {
        options[index].classList.add('incorrect');
        options.forEach(option => {
            if (option.textContent === question.answer) {
                option.classList.add('correct');
            }
        });
    }
}

function showAnswer() {
    const answerElement = document.getElementById('answer');
    answerElement.textContent = `Answer: ${questions[currentQuestionIndex].answer}`;
    answerElement.style.display = 'block';
    document.getElementById('showAnswerBtn').style.display = 'none';
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        finishQuiz();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function updateScore() {
    document.getElementById('scoreValue').textContent = 
        `${score} / ${questions.length} (${Math.round(score/questions.length*100)}%)`;
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('timer');
    if (timerEnabled) {
        timerElement.textContent = `Time remaining: ${timeLeft} seconds`;
        timerElement.style.display = 'block';
    } else {
        timerElement.style.display = 'none';
    }
}

function finishQuiz() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    
    const finalScore = document.getElementById('finalScore');
    const percentage = Math.round((score / questions.length) * 100);
    finalScore.innerHTML = `
        <p>Final Score: ${score} out of ${questions.length} (${percentage}%)</p>
        <p>Thank you for completing the quiz!</p>
    `;
}

function restartQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('nameInput').style.display = 'block';
    document.getElementById('name').value = '';
    score = 0;
    currentQuestionIndex = 0;
}