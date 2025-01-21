---
layout: layout.vto
type: note
title: The Rise, Fall and Rebirth of the Open Web
excerpt: An exploration of the history of the open web and the protocols that enabled it.
---

# The Rise, Fall, and Rebirth of the Open Web

With the rise of protocols like [Nostr](https://nostr.com/) (popular in the Bitcoin community) and the [AT Protocol](https://atproto.com/) (popularized by [BlueSky](https://bsky.app/)), now feels like the perfect time to explore the history of the web and the open philosophy it was built on. As someone involved in the communities and clients using these protocols for the past couple of years, I understand their significance. However, this write-up is my effort to deepen that understanding by examining the emergence and necessity of decentralized protocols.

What I've found is that the history of the open web is a fascinating, intertwined narrative of protocols and the consequences of their creation and adoption. Like many foundational innovations, these technologies often succumb to commercialization and centralization over time. Will this time be different? Only time will tell.

Let's dive in!

## The Philosophy of the Early Internet

The early internet was founded on principles of openness, decentralization, and collaboration, reflecting the technologies, governance structures, and culture of its time.

The ARPANET, the precursor to the internet, was designed to ensure communication could endure even in the face of infrastructure loss--resilient to single points of failure. This concept was particularly vital during the Cold War (late 1940s to late 1980s), a period marked by geopolitical tensions where communication disruptions were a constant concern.

## Protocols of the Open Web

### ARPA and NCP (1969-1980)

The early days of networking saw the creation of NCP (Network Control Protocol), the first protocol used by ARPANET. NCP enabled basic communication between nodes, serving as both a transport and host-to-host communication protocols.

NCP managed communication by establishing and maintaining logical connections between hosts using socket pairs--a local socket number identifying a specific process on the host and a remote socket number identifying the target process on destination host. These socket pairs uniquely identified each logical connection, which supported full-duplex communication, allowing data to flow in both directions simultaneously over the same connection.

While NCP handled host-level communication, low-level packet switching and routing were managed by IMPs (Interface Message Processors). In essence, NCP relied on IMPs to deliver packets between nodes.

Using NCP, ARPANET's earliest nodes--University of California Los Angeles, Stanford Research Institute, University of California Santa Barbara, and the University of Utah--collaborate to share resources and advance computing research. Each institution contributed to the development of the early internet, setting the stage for its evolution into the more modern systems we recognize today.

NCP foundational design enabled use cases still familiar today: remote login, file transfer, time-sharing systems, email, and collaborative tools like document editing. However, its simplicity came with limitations. NCP lacked robust error detection and correction, relying on the underlying network (IMPs) to handle these issues. It also lacked a standardized addressing scheme and error recovery mechanisms, limiting its scalability and reliability. These shortcomings ultimately led to the development of TCP/IP.

### FTP (1971)

In 1971, [RCF 114](https://www.rfc-editor.org/rfc/rfc114), titled "A File Transfer Protocol" by Abhay Bhushan, introduced a standardized method for transferring files between hosts on the ARPANET. Its primary goal was to enable indirect use of remote computers, allowing users to transfer files without the need to log into remote systems directly.

Key features of this early protocol included:

- **Indirect File Access**: Enabled users to transfer files seamlessly across the ARPANET without requiring direct logins to remote systems.
- **Standardized Commands**: Defined a consistent set of commands for file operations, including retrieving, storing, deleting, and listing files, ensuring uniform interactions across diverse systems.
- **Data Type Specification**: Supported the designation of data types and structures to accommodate various file formats, ensuring accurate interpretation during transfers.
- **User Identification Mechanism**: Introduced basic access control through username and password authentication, enhancing security.
- **Error Recovery Procedures**: Included mechanisms for error correction and recovery to maintain data integrity and reliability during transfers.

FTP simplified data and software sharing, becoming a cornerstone of collaboration within academic and research communities.

### Email: The First Killer App (1971)

Email, the internet’s first “killer app,” emerged during the development of NCP and later TCP/IP. Ray Tomlinson invented email in 1971 while working at BBN, a key player in ARPANET’s creation. Before email, communication on the network primarily relied on file sharing. Seeking a more efficient solution, Tomlinson modified CYPNET to send messages across ARPANET, enabling users to communicate between different computers. This innovation popularized the use of the “@” symbol to separate user names from domains.

In 1982, the creation of SMTP (Simple Mail Transfer Protocol) standardized email communication and significantly improved upon Tomlinson’s initial implementation. SMTP introduced several key advancements:

- **Formalized Communication Rules**: Established a standardized protocol for sending emails between servers, which CYPNET lacked.
- **Support for Multiple Recipients**: Enabled sending emails to multiple recipients and distributing messages to mailing lists, a capability absent in Tomlinson’s system.
- **Error Handling**: Provided explicit error codes and responses to diagnose and resolve delivery issues, whereas Tomlinson’s implementation offered only rudimentary error handling.
- **Structured Message Format**: Worked with standards like RFC 822 to define consistent headers (To, From, Subject), replacing the unstructured, ad-hoc metadata of early emails.
- **Scalability**: Designed to accommodate the growing internet, ensuring email functionality expanded as ARPANET evolved into a global network. Tomlinson’s system was tied to ARPANET’s original constraints.

SMTP transformed email from a groundbreaking experiment into a robust, scalable, and universal communication tool, solidifying its place as a cornerstone of internet communication.

### Usenet (1979)

Usenet, created by Tom Truscott and Jim Ellis at Duke University in 1979, was one of the first decentralized systems for sharing messages and fostering online discussions. As a precursor to modern internet forums and social media, Usenet laid the foundation for the social internet as we know it today.

Usenet relied on UUCP (Unix-to-Unix Copy Program) to transfer messages between servers in a peer-to-peer manner, with each server forwarding posts to its neighbors.

Key features and insights from Usenet include:

- **Newsgroups**: Discussions were organized into categories called newsgroups, with a hierarchical naming system (e.g., `comp.sys` for computer systems).
- **Decentralization**: Usenet’s peer-to-peer design required each server to store and propagate messages, eliminating single points of failure and central control. This decentralization, akin to modern protocols like Nostr, aligned with the internet’s ideals of openness and collaboration.
- **Self-Governance**: Without central authority, Usenet communities were often self-moderated, with users establishing their own norms and moderation practices.

Usenet’s decentralization and community-driven structure embodied the spirit of the early internet. However, its culture faced a significant shift in **September 1993**, often referred to as “Eternal September.” This marked the influx of new users when AOL (America Online) granted its subscribers access to Usenet. The term “Eternal September” originated from the annual wave of college students who traditionally joined Usenet each September, requiring time to acclimate to its norms. With the massive influx of AOL users, however, this adjustment period became permanent.

This cultural shift introduced challenges such as increased spam, off-topic posts, and conflicts, disrupting the established norms of Usenet. Over time, these issues led to Usenet losing its prominence as a hub for niche, vibrant discussions, marking the beginning of a broader transition from protocols to platforms.

### TCP/IP (1981-1983)

TCP (Transmission Control Protocol) and IP (Internet Protocol), developed between 1981 and 1983, replaced NCP as the standard protocol for ARPANET, addressing many of its limitations and paving the way for the modern internet.

**TCP** ensured reliable communication by breaking data into packets, checking for errors, and retransmitting lost packets. It reassembled data at the destination, ensuring integrity despite packet loss. TCP also introduced flow and congestion control, allowing networks to adapt transmission rates based on conditions. These features resolved NCP’s lack of robust error handling and basic flow management, enabling networks to scale more effectively.

**IP** provided a unique addressing system (IP addresses) that allowed data to traverse diverse networks. Unlike NCP’s reliance on hardcoded socket pairs, IP made interoperability and routing across heterogeneous networks possible.

The separation of TCP and IP into distinct layers (transport and network) introduced modularity and flexibility, supporting diverse networks and applications. This overcame NCP’s single-layer design, which lacked the versatility needed for the internet’s future growth.

**Inter-networking** was another significant advancement enabled by TCP/IP, allowing multiple networks to connect and function as one. This shift from NCP’s single homogeneous network (ARPANET) to a universal language of interconnected systems established the foundation of the global, decentralized internet we use today.

### DNS (1983)

Introduced in 1983 by Paul Mockapetris, the Domain Name System (DNS) revolutionized how devices on the internet were identified and accessed. It replaced the centralized, cumbersome `HOSTS.TXT` file system with a distributed, hierarchical structure that could scale alongside the rapidly growing internet.

Before DNS, network administrators relied on a single `HOSTS.TXT` file to map human-readable hostnames to IP addresses. This file, managed by the NIC (Network Information Center) at Stanford Research Institute, had to be manually updated and distributed to every system on ARPANET. As the network expanded, this centralized system became a bottleneck, with errors and delays in updates causing significant disruptions. By the early 1980s, maintaining a single centralized file was no longer practical, necessitating a more scalable solution.

DNS addressed these challenges by introducing a hierarchical structure for domain names. Names are organized into a tree-like system, with the root at the top and Top-Level Domains (TLDs) such as .com or .org below it. For example, example.com is divided into levels: com (TLD) and example (Second-Level Domain). This delegation of responsibilities allowed for efficient management and scalability.

DNS also employed a network of distributed servers to store and resolve domain names to IP addresses, eliminating reliance on a single central database. Distributed servers improved reliability, performance, and resilience. DNS servers could cache query results, reducing load and speeding up responses for frequently requested domains. Finally, DNS made the internet far more user-friendly: instead of memorizing numeric IP addresses (e.g., `192.0.2.1`), users could type intuitive domain names (e.g., `example.com`).

By solving the limitations of `HOSTS.TXT` and enhancing usability, DNS became a cornerstone of the modern internet, enabling its global and decentralized nature.

### IRC (1988)

Developed by Jarkko Oikarinen in 1988, Internet Relay Chat (IRC) enabled real-time text communication and played a pivotal role in fostering early online communities. IRC’s innovations built upon earlier protocols and technologies, extending their concepts to create a new paradigm for online interaction.

- **Extending Telnet**: IRC expanded Telnet’s one-to-one communication sessions into multi-user chats within channels, enabling group conversations in real time.
- **Decentralization from Usenet**: IRC adopted Usenet’s decentralized philosophy, applying it to synchronous messaging. Multiple IRC servers could link together to form networks, distributing load and avoiding reliance on a central server.
- **Hierarchical Naming from DNS**: Borrowing from DNS, IRC used a hierarchical naming system for chat channels and users. This allowed intuitive organization, with nicknames and channels globally visible across linked servers.
- **Command-Response Structure**: Inspired by protocols like SMTP and FTP, IRC introduced commands such as /join, /quit, and /msg, simplifying interactions and enabling clients to interpret server messages effectively.
- **Influence of MUDs**: IRC drew from Multi-User Dungeons (MUDs), text-based multiplayer games popular in the 1980s. While MUDs facilitated real-time interactions within virtual worlds, IRC applied the concept to general communication.

Key innovations of IRC included group channels for interaction, flexible user and server configurations, dynamic moderation, and a lightweight protocol. By combining these features, IRC became a cornerstone of real-time online communication, laying the groundwork for modern chat applications.

### HTTP and WWW (1989-1991)

The World Wide Web (WWW) and Hypertext Transfer Protocol (HTTP), introduced by Tim Berners-Lee between 1989 and 1991, revolutionized how information was shared and consumed. These innovations built upon prior technologies, creating the foundation of the modern web.

- **Built on TCP/IP**: HTTP used TCP/IP as its transport layer, ensuring reliable delivery of web content. This interoperability allowed HTTP to function across any device or network supporting TCP/IP, establishing the web as a universal platform.
- **Standardized Resource Addressing**: The introduction of URLs (Uniform Resource Locators), built on DNS, provided a standardized way to locate web resources. URLs combined the protocol (`http://`), domain (`example.com`), and resource path (`/index.html`), enabling precise identification and retrieval of content.
- **Hypertext Implementation**: Berners-Lee implemented hypertext using HTML (Hypertext Markup Language), a simple text-based language for creating web pages. HTML’s support of hyperlinks (`<a>` tags) allowed users to navigate seamlessly between linked resources, turning the web into an interconnected “web” of information. Hypertext, conceptualized by Ted Nelson in the 1960s and seen in systems like NLS and HyperCard, was now available to a global audience.
- Improvement Over FTP: Unlike FTP, which focused on isolated file transfers, HTTP facilitated the retrieval of hyperlinked resources, enabling user-friendly interaction with content and seamless display of linked documents in a browser.
- **Decentralized Architecture**: Inspired by Usenet, the WWW adopted a decentralized design, allowing anyone with a server to host and link content without reliance on a central authority.
- **Structured Metadata**: HTTP extended the use of structured metadata, seen previously in email protocols like SMTP. HTTP headers provided contextual information about requests and responses (e.g., `Content-Type` and `Status Code`), enabling dynamic, interactive communication between clients (browsers) and servers.

**Key Innovations of HTTP and the WWW:**

1. **Stateless Communication Protocol**: HTTP’s stateless design ensured each client-server request was independent, enabling scalability as the web grew.
2. **Cross-Platform Compatibility**: HTTP and HTML were text-based and platform-agnostic, allowing access from any device or operating system.
3. **Interactive Content**: The web unified interactive content (e.g., images, text, and links) into a single environment accessible via a browser.

Together, HTTP and the WWW transformed the internet into a user-friendly, decentralized, and universally accessible medium, laying the groundwork for the web’s exponential growth.

## The Transition from Protocols to Platforms

The shift from the **protocol-driven era** of the open web to the **platform-driven era** marked a profound technological and cultural transformation. Early internet protocols like **TCP/IP**, **DNS**, **HTTP**, **SMTP**, **FTP**, and **Usenet** emphasized decentralization, interoperability, and user empowerment. However, by the mid-1990s, the emergence of proprietary platforms such as AOL, Prodigy, and later Facebook and Google, redefined the internet experience. These platforms offered centralized, user-friendly services but at the cost of openness and decentralization.

The early internet, defined by protocols, empowered individuals and communities to build their own tools and networks. Protocols like **TCP/IP** and **DNS** created a universal framework for connectivity, while decentralized services such as **Usenet** and **IRC** fostered open, self-managed discussions. Tools like **FTP**, **HTTP**, and **SMTP** enabled users to share files, publish content, and communicate freely, embodying the era’s ethos of openness, collaboration, and innovation.

By contrast, the platform-driven internet that emerged in the mid-1990s offered a polished, accessible alternative that abstracted away the technical complexities of the protocol-driven era. Platforms like AOL, Prodigy, and CompuServe created “walled gardens,” restricting users to content and services within their ecosystems. While this made the internet more accessible to non-technical users, it limited their ability to explore and interact with the broader web. Platforms like Facebook and Google later extended this model, becoming dominant gatekeepers for social interaction and information discovery. These centralized platforms hid the complexities of early internet protocols, offering plug-and-play solutions that attracted a general audience. For instance, instead of setting up an FTP server to share files, users could simply upload them to Dropbox or Google Drive. Similarly, proprietary messaging platforms like Facebook Messenger and WhatsApp replaced interoperable protocols such as IRC, locking users into closed ecosystems.

Cultural shifts accompanied these technological changes. In the protocol-driven era, users often acted as both creators and consumers, whether by writing Usenet posts, hosting personal websites, or managing their own email servers. Platforms, however, encouraged a more passive consumption model, with user-generated content controlled within proprietary systems. Trust in gatekeepers grew, with users relying on platforms to curate and deliver information. Search engines like Google became the primary gateway to content, while social platforms dictated social interactions, often reducing individual agency. The communal culture of early internet communities gave way to corporate-driven interactions, as decentralized discussions on Usenet were replaced by centralized forums governed by platform owners. Moreover, the platform era introduced a surveillance-based business model, monetizing user data to serve targeted advertisements—a stark departure from the user-centric and privacy-conscious ethos of the early web.

Despite the dominance of platforms, the foundational protocols of the open web remain critical. **TCP/IP**, **HTTP**, and **DNS** still underpin the internet’s infrastructure, ensuring its basic interoperability. Furthermore, movements like the **fediverse** (e.g., Mastodon), **blockchain-based platforms**, and protocols like **Nostr** aim to revive the ideals of decentralization, user autonomy, and community-driven governance. These efforts reflect a growing desire to reclaim the open and collaborative spirit that defined the early internet.

The transition from protocols to platforms transformed the internet from a decentralized, user-driven network into a centralized, corporate-controlled ecosystem. While platforms made the internet more accessible, they sacrificed openness, user autonomy, and the collaborative ethos of its early days. Revisiting the foundational principles of protocols is crucial for those working to rebuild a more open, equitable internet.

## Closing Thoughts

The evolution from the early decentralized internet to today’s platform-dominated web reflects a shift from protocols that empowered users to systems that prioritize convenience, control, and corporate interests. Early technologies like Usenet, HTTP, and FTP embodied ideals of openness, collaboration, and autonomy, but modern platforms have concentrated power, creating walled gardens and monetizing user data. Yet, the foundational protocols of the internet persist, inspiring new decentralized initiatives like Nostr, Mastodon, and blockchain-based systems. By supporting and adopting applications built on decentralizing protocols, we can reclaim the values of openness, privacy, and user empowerment. Every choice we make—as developers, users, or advocates—shapes the future of the web. Together, we can revive the collaborative spirit of the internet’s origins and help create a more equitable and resilient digital future.