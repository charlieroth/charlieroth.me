---
layout: layout.vto
title: A Not-so-Brief History of the Web
---

# A Not-so-Brief History of the Web

With the popularization of open protocols like [Nostr](https://nostr.com/) (popular in the Bitcoin community) and the [AT Protocol](https://atproto.com/) (popularized through application [BlueSky](https://bsky.app/)), I thought now would be a good time to educate myself about the history of the web and the open philosophy it was built on. While I have been part of the communities and clients that operate on these protocols for the past couple of years and understand why they came to be, this write up is intended to deepen my understanding of the emergence and necessity of decentralized protocols.

After writing this I have discovered that the history of the open web is a long, interesting, and intermixed set of protocols and the consequences of their invention and adoption. Like many foundational innovations in society commercial interests will eventually perverse these technologies and lend their hands to centralization. Maybe this time will be different, who knows?

Let's dive in!

## The Philosophy of the Early Internet

The early internet was rooted in philosophies of openness, decentralization and collaboration. These ideals are a reflection of the technologies, governance structures and culture of the time.

The precursor to the internet, the ARPANET, aimed to ensure communication could persist even in the event of infrastructure loss, in other words resilient to central points of failure. This idea was crucial due to the Cold War, which we argue began in late 1940s and ended in the late 1980s, were tensioned between nations could easily result in cutoffs in communication.

## Protocols of the Open Web

### ARPA and NCP (1969-1980)

The origins of networking saw the creation of NCP (Network Control Protocol) which was the first protocol used by ARPANET, enabling basic communication between nodes. NCP functioned as both a transport protocol and a host-to-host communication protocol.

The communication management component of NCP established and maintained connections between hosts on the network. This was accomplished through logical connections between hosts using socket pairs, a local socket number identifying a specific process on the host and a remote socket number identifying the target process on the destination host. This logical connection was uniquely identified by a combination of these socket pairs. These logical connections enabled a full-duplex communication, allowing data to flow in both directions simultaneously over the same logical connection.

While NCP managed host-level communication, the IMPs (Interface Message Processors) handled the low-level packet switching and routing. In other words, NCP relied on the IMPs to deliver packets between nodes.

With NCP the earliest nodes of the ARPANET were able to share resources to accomplish the computing research at the time. These earliest nodes included the University of California Los Angeles, Stanford Research Institute, University of California Santa Barbara and the University of Utah. Each institution had roles and resource contributions that progressed the early internet into the more modern form we know today.

The primitives of NCP enabled a variety of use cases that we recognize today: remote login, file transfer, time-sharing systems, email and collaboration tools (document editing).

NCP's simple yet functional design laid the foundation for host-to-host communication but it was not without limitation. NCP did not include robust mechanisms for error detection or correction, assuming that the underlying network (IMPs) would handle these issues. NCP lacked a standardized addressing scheme and error recovery mechanisms limiting its scalability and reliability, leading to the development of TCP/IP

### FTP (1971)

[RCF 114](https://www.rfc-editor.org/rfc/rfc114), titled "A File Transfer Protocol" by Abhay Bhushan, laid the groundwork for FTP, establishing a standardized method for transferring files between hosts on the ARPANET. The primary objective for RFC 114 was to facilitate indirect use of remote computers by allowing users to transfer files without needing to log into remote systems directly.

Key features of this early version included:

- **Indirect File Access**: Users can transfer files without directly logging into remote systems, promoting seamless file sharing across the ARPANET
- **Standardized Commands**: A defined set of commands for file operations (retrieving, storing, deleting and listing), facilitating uniform interactions between diverse systems.
- **Data Type Specification**: Allowed the designation of data types and structures, accommodating various file formats and ensuring accurate data interpretation during transfers.
- **User Identification Mechanism**: Introduced a method for user identification through username and password, providing basic access control and security
- **Error Recovery Procedures**: Outlined mechanisms for error detection and recovery to maintain data integrity and reliability during file transfers.

The inception of FTP simplified the sharing of data and software, creating a cornerstone of collaboration especially in academic and research communities.

### Email: The First Killer App (1971)

During the creation of NCP and later TCP/IP, the first "killer app" of the internet merged, Email. Ray Tomlinson invented email in 1971 while working at BBN, a company deeply involved in the development of ARPANET. Prior to email users primarily communicated via file sharing. In pursuit of a more effective form of communication, Tomlinson modified CYPNET to send messages across ARPANET effectively allowing users to communicate between different computers. This invention popularized the "@" symbol, symbolizing user and domain separation.

Later in 1982 SMTP (Simple Mail Transfer Protocol) was created, standardizing email. SMTP significantly improved upon Tomlinson's initial email implementation by standardizing and extending how email messages were sent across networks. SMTP overcame Tomlinson's CYPNET implementation in several ways:

- **Formalized Communication Rules**: SMTP defined a clear, standardized protocol for sending emails between servers which CYPNET lacked
- **Support for Multiple Recipients**: SMTP introduced mechanisms to send the same email to multiple recipients or distribute email to mailing lists whereas Tomlinson's system primarily supported basic one-to-one messaging.
- **Error Handling**: SMTP provided explicit error codes and responses to help diagnose and resolve issues during message delivery. Tomlinson's implementation had rudimentary error handling and delivery reliability was not addressed in any robust way.
- **Structure Message Format**: SMTP worked in conjunction with standards like RFC 822, defining structured headers (e.g., `To`, `From`, `Subject`) for emails. Early emails lacked consistent structure and relied on ad-hoc implementations for metadata.
- **Scalability**: SMTP was designed for expanding networks, ensuring email worked seamlessly as ARPANET evolved into the global internet. Tomlinson's email system was tied to the original ARPANET network and it's constraints.

In summary, SMTP turned email from an experimental feature into a robust, scalable and universal communication tool, cementing its role as a cornerstone of internet communication.

### Usenet (1979)

Usenet, created by Tom Truscott and Jim Ellis at Duke University in 1979, was one of the first decentralized systems for sharing messages and fostering online discussion. This became a precursor to modern internet forums and social media. After reading the below features/insights of Usenet it is very clear were the modern social internet of today found it's roots.

Usenet relied on UUCP (Unix-to-Unix Copy Program) to transfer messages between servers, distributed in a peer-to-peer manner, with each server forwarding posts to its neighbors.

Discussions on Usenet were organized into categories called **newsgroups** with hierarchical naming (e.g., `comp.sys` for computer systems).

The decentralization of Usenet, prescient to protocols like Nostr, required each participating server store and propagate messages meaning there was no single point of failure or centralized protocol. More so, this meant there was no central authority of Usenet, aligning with the internet's broader ideals of openness and collaboration, and communities, or newsgroups, were often self-governed with users creating their own norms and moderation practices.

Later touched on in the section "The Transition from Protocols to Platforms", a cultural shift in Usenet began in September 1993, known as "Eternal September", when AOL (America Online) provided users access to Usenet. The name "Eternal September" comes from the influx of new college students gaining access to Usenet each September. This new wave of users disrupted the established norms until they acclimated to the community's culture. With this many new users Usenet experienced an increase of spam, off-topic posts and other conflicts. Eventually this lead to a permanent culture shift in Usenet, leading Usenet to lose its place on the internet for niche, vibrant discussions.

### TCP/IP (1981-1983)

TCP (Transmission Control Protocol) and IP (Internet Protocol) were created in the years 1981-1983, replacing NCP as the standard for ARPANET.

TCP ensured reliable communication, with error checking and retransmission, by breaking data into packets and reassembling them at the destination. This addressed the limitation of NCP's lack of robust error handling and data integrity in the face of packet loss. Additionally with TCP's flow control and congestion control, this overcame NCP's limitation of basic flow management, allowing networks to scale by adapting transmission rates based on network conditions.

IP provided a unique addressing system (IP addresses), allowing data to find its way across networks. IP addresses overcame NCP's reliance on hardcoded socket pairs, enabling interoperability and routing across diverse networks.

The separation of the TCP/IP layers (transport and network) overcame NCP's limitation of single-layer design, providing modularity and flexibility to support different types of networks and applications.

TCP/IP supported inter-networking, connecting multiple networks into one, overcoming NCP's limitation of a single homogeneous network (ARPANET). Through TCP/IP an universal language of interconnected systems was established, making the global and decentralized internet we have today.

### DNS (1983)

DNS (The Domain Name System) was introduced in 1983 by Paul Mockapetris. DNS revolutionized how devices on the internet were identified and accessed, replacing the centralized and cumbersome `HOSTS.TXT` file system with a distributed, hierarchical structure that could scale with the rapidly growing internet.

Before DNS, network administrators maintained a single `HOSTS.TXT` file that mapped human-readable hostnames to IP addresses. This file was managed by the NIC (Network Information Center) at Stanford Research Institute. This file had to be manually updated and distributed to every system on ARPANET and as the network grew, this became a bottleneck with errors and delays in updates could cause significant disruptions. By the early 1980s the maintenance of a single centralized file was deemed impractical and a better solution was required.

To address these limitations, DNS was introduced. DNS organizes domain names into a tree-like hierarchy, with the root at the top and TLD (Top-Level Domains) below it. For example, `example.com` is broken into the levels: `com` (TLD) and `example` (Second-Level Domain). This delegation of responsibilities enabled efficient management and scalability. Additionally DNS uses a network of distributed servers to store and resolve domain names to IP addresses, eliminating reliance on a single central database and again improving reliability and performance. With this in place DNS servers could cache query results, reducing load on the system and speeding up responses for frequently requested domains. Lastly, instead of memorizing numeric IP addresses (e.g., `192.0.2.1`) users can type intuitive domains names (e.g., `example.com`), improving usability.

### IRC (1988)

IRC (Internet Relay Chat) was developed by Jarkko Oikarinen in 1988, allowing real-time text communication and fostering early online communities. IRC can be best understood by it's extensions upon the previous protocols and technologies that came before it.

IRC took Telnet's one-to-one communication sessions and extended the concept of real-time interaction to multi-user chats in channels.

IRC took Usenet's decentralized philosophy and implemented it for synchronous (real-time) messaging. Multiple IRC servers could link together to form networks, distributing the load and avoiding reliance on a central server.

Borrowing from DNS, IRC adopted a hierarchical naming scheme for chat channels and users, allowing intuitive organization and interactions within the network. It supported global visibility of nicknames and channels across linked servers.

Borrowing from protocols like SMTP and FTP, IRC introduced a similar command-response structure (e.g., `/join`, `/quit`, `/msg`), simplifying interactions and enabling clients to interpret server messages.

MUDs (Multi-User Dungeons) introduced in the 1980s were text-based multiplayer games where users could interact in real-time within virtual worlds. IRC borrowed the concept of real-time text interaction among multiple participants but applied it to general communication rather than gaming.

All together, the key innovations of IRC were channels for group interaction, user and server flexibility, dynamic moderation and a lightweight protocol.

### HTTP and WWW (1989-1991)

WWW (World Wide Web) and HTTP (Hypertext Transfer Protocol) was introduced by Tim Berners-Lee between 1989 and 1991, revolutionizing how information was shared and consumed. Let's again understand the innovations of HTTP and the WWW through the extensions it made through prior technologies.

HTTP leveraged TCP/IP as its transport layer, ensuring reliable delivery of web content. This interoperability enabled HTTP to function across any device of network supporting TCP/IP, making the web a universal platform.

The introduction of URLs (Uniform Resource Locators), built on DNS, provided a standardized addressing of web resources. URLs specified the protocol (`http://`), the domain (`example.com`) and the resource path (`/index.html`), enabling precise identification and retrieval of content.

Berners-Lee implemented hypertext using HTML (Hypertext Markup Language), a simple text-based language for creating web pages. HTML's support of hyperlinks (`<a>` tags) allowed users to navigate between linked resources, transforming the web into an interconnected "web" of information. Hypertext was conceptualized in the 1960s by Ted Nelson and later was implemented in systems like Stanford Research Institute's NLS and HyperCard. Together a non-linear linking of documents was no available to the global internet.

HTTP improved on FTP by supporting the retrieval of hyperlinked resources rather than isolated file transfers. Unlike FTP, HTTP was designed for user-friendly interaction with content, focusing on the seamless display of linked documents in a browser.

The WWW adopted the decentralized architecture, made famous through Usenet, allowing anyone with a server to host and link content without relying on a central authority.

HTTP extended the idea of structured metadata with HTTP headers, previously seen in the email protocols SMTP, providing contextual information about requests and responses (e.g., `Content-Type` and `Status Code`). This facilitate dynamic and interactive communication between clients (browsers) and servers.

Some of the key innovations of HTTP and the WWW were the stateless communication protocol of HTTP where each request from a client to a server was independent which scaled well for the web's growth, cross-platform compatibility due to HTTP and HTML being text-based and platform agnostic ensuring any device or operating system could access the web, and lastly the interactive content of web (e.g., images, text, links) was now packaged into a single environment accessible via a browser.


## The Transition from Protocols to Platforms

...