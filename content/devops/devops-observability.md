# devops - observability

## sources

[Metrics, Logs and Traces: The Golden Triangle of Observability in Monitoring - `devops.com` - 20181108](https://devops.com/metrics-logs-and-traces-the-golden-triangle-of-observability-in-monitoring/)

[The Ultimate Guide to Observability - strongdm blog - 20230118](https://www.strongdm.com/observability)

[Observability vs. monitoring: What’s the difference? - dynatrace - 20231212](https://www.dynatrace.com/news/blog/observability-vs-monitoring/)

[Understanding the Difference Between Observability and Monitoring - strongdm blog - 20231103](https://www.strongdm.com/blog/observability-vs-monitoring)

[Observability vs. monitoring in DevOps - `about.gitlab.com/blog` - 20220614](https://about.gitlab.com/blog/2022/06/14/observability-vs-monitoring-in-devops/)

[From Monitoring to Observability: Left Shift your SLOs with Chaos - Michael Friedrich, GitLab](https://www.youtube.com/watch?v=BkREMg8adaI)

## articles

[I test in prod - Charity Majors - 201908](https://increment.com/testing/i-test-in-production/)

> Testing in production is a superpower. It’s our inability to acknowledge it that’s the trouble.

## terminology

### metrics

**Definition**: Metrics are numerical values that represent the measurements of various aspects of a system at a given point in time.
They are typically used to quantify the performance and health of systems and applications.
Common examples include CPU usage, memory usage, response times, error rates, and throughput.

**Usage**: Metrics are used for real-time monitoring and alerting, as well as for long-term trend analysis and capacity planning.

### logs

**Definition**: Logs are records of events that happen within a system.
They are typically text-based and provide a chronological record of activities performed by the system.
Logs can include a wide range of information, such as errors, warnings, and informational messages, along with details like timestamps, event types, and source information.

**Usage**: Logs are used for debugging, auditing, and gaining detailed insights into specific events and sequences of actions within the system.

### traces

**Definition**: Traces represent the journey of a single request or transaction as it travels through a distributed system.
They provide a way to track the flow and interaction of the request across various components and services.
A trace typically includes a series of 'spans,' each representing a specific operation or step in the transaction.

**Usage**: Traces are crucial for understanding the behavior and performance of distributed systems, identifying bottlenecks, and troubleshooting issues related to specific requests or transactions.

### telemetry vs APM

In summary, telemetry provides a broad view of system health and performance through data collection and analysis, while APM focuses specifically on optimizing and managing the performance of software applications.
Both are integral to maintaining high-performing and reliable systems in a DevOps environment.

### telemetry

In the context of DevOps, telemetry refers to the process of collecting, processing, and analyzing data about the performance and usage of applications and infrastructure.
This can include metrics like response times, error rates, system resource usage (CPU, memory, disk, network), and more.
The primary goal of telemetry is to provide real-time insight into the health and performance of systems, allowing teams to detect and address issues proactively.
Telemetry data is often used for monitoring, alerting, and making informed decisions about system optimization and scaling.

### APM (Application Performance Monitoring)

APM is a more focused aspect of telemetry that specifically targets monitoring and managing the performance and availability of software applications.
APM tools help in identifying bottlenecks, slow transactions, and other issues that affect the user experience.
They can provide detailed performance metrics at the level of individual requests, transactions, or application components.
APM solutions often include features like distributed tracing, real-time analytics, and user experience monitoring.
The goal of APM is to ensure that applications meet performance expectations and service level agreements (SLAs), contributing to a better end-user experience.

### observability vs telemetry

In essence, telemetry can be thought of as a subset of observability. Telemetry provides the data needed to achieve observability, while observability is the broader practice of interpreting this data to gain insights into the system’s performance and health.

### observability

Observability is a broader concept that refers to how well the internal states of a system can be inferred or understood based on the system's external outputs (which includes the data collected through telemetry).
It's a measure of how well you can understand a system’s behavior and performance.
Observability encompasses telemetry (data collection) but also includes the tools, practices, and cultural aspects that help in interpreting this data.
This means analyzing the telemetry data to understand system performance, diagnose issues, and make informed decisions about system health and improvements.
The goal of observability is to provide a comprehensive view of the system’s health and performance, enabling teams to detect and diagnose issues, understand trends, and make data-driven decisions.
It's not just about having data (as with telemetry) but about being able to make sense of that data in a meaningful way.

> When used in the IT context and with reference to the work of software development (Dev) and IT operations (Ops) teams, the term observability describes the ability to understand and manage the performance of all the systems, servers, applications, and other resources constituting an enterprise technology stack.

### observability vs monitoring

> Observability is distinct from monitoring, which passively tracks pre-defined metrics in discrete systems.
> Instead, observability makes actionable use of data by enabling a holistic view across the entirety of a technology stack.
> And it aggregates all the data produced by all the IT systems to produce real-time insights, identify anomalies, determine their root cause, and proactively resolve them.

### The Three Pillars of Observability

The concept of the "Three Pillars of Observability" refers to how metrics, logs, and traces work together to provide a comprehensive view of a system’s health and performance.

**Comprehensiveness**: Each pillar provides a different perspective on the system.
Metrics offer a high-level overview, logs provide detailed event data, and traces show the flow and interaction of requests.
Together, they give a complete picture of the system’s behavior and performance.

**Correlation**: By correlating data from metrics, logs, and traces, teams can more effectively diagnose and troubleshoot issues.
For example, a spike in error rates (metrics) can be investigated by looking at the corresponding logs for error messages and using traces to follow the path of failing requests.

**Depth and Breadth**: While metrics and logs provide breadth in terms of system-wide visibility, traces add depth by allowing insight into the intricate workings of distributed systems.
This combination is essential in modern, complex architectures.

In summary, the "Three Pillars of Observability" — metrics, logs, and traces — are integral to achieving a deep and comprehensive understanding of system health and performance in the DevOps world.
Each pillar provides unique insights, and together they form the foundation of effective system observability and management.

## organizations

[Cloud Native Computing Fundation](https://www.cncf.io/)

> projet de la Linux Foundation qui a été fondé en 2015 pour aider à faire progresser la technologie des conteneurs et rassembler les industries technologiques autour de son évolution.
>
> Il a été annoncé en même temps Kubernetes 1.0, un gestionnaire de cluster de conteneurs open source, qui a été contribué à la Linux Foundation par Google en tant qu'initiateur de cette technologie. Les membres fondateurs incluent Google, CoreOS, Mesosphere, Red Hat, Twitter, Huawei, Intel, Cisco, IBM, Docker, Univa et VMware.
>
> En août 2018, Google a annoncé qu'il cédait le contrôle opérationnel de Kubernetes à la communauté. Depuis sa création, la CNCF a lancé plusieurs sous-projets hébergés.

[Fondation Linux](https://fr.wikipedia.org/wiki/Fondation_Linux)

> La Fondation Linux (en anglais Linux Foundation) est un consortium à but non lucratif fondé le 21 janvier 2007, il résulte de la fusion entre l'Open Source Development Labs et le Free Standards Group.
>
> La Linux Foundation a pour mission de protéger et standardiser Linux en procurant les ressources et services centralisés nécessaires à concurrencer de manière efficace les autres systèmes d'exploitation.
>
> La Linux Foundation regroupe 70 membres parmi lesquels on trouve AMD, Fujitsu, HP, Hitachi, Intel, IBM, LG Group, Microsoft, NEC, Novell, Oracle, Orange, Samsung, Twitter, Valve, Yahoo! et d'autres.
>
> Cette organisation est dirigée par Jim Zemlin, ancien directeur du FSG qui maintient en place les principaux développeurs, dont Linus Torvalds, sponsorisé par la fondation.

## protocols

### `OTLP` (OpenTelemetry Protocol)

[OTLP Specification 1.1.0](https://opentelemetry.io/docs/specs/otlp/)

> The OpenTelemetry Protocol (OTLP) specification describes the encoding, transport, and delivery mechanism of telemetry data between telemetry sources, intermediate nodes such as collectors and telemetry backends.
>
> OTLP is a general-purpose telemetry data delivery protocol designed in the scope of the OpenTelemetry project.
>
> OTLP defines the encoding of telemetry data and the protocol used to exchange data between the client and the server.
>
> This specification defines how OTLP is implemented over gRPC and HTTP 1.1 transports and specifies Protocol Buffers schema that is used for the payloads.

[OpenTelemetry - CNCF](https://github.com/open-telemetry) / [`opentelemetry.io`](https://opentelemetry.io/)

> OpenTelemetry is a collection of APIs, SDKs, and tools. Use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) to help you analyze your software’s performance and behavior.

[What is OpenTelemetry?](https://opentelemetry.io/docs/what-is-opentelemetry/)

> OpenTelemetry is an Observability framework and toolkit designed to create and manage telemetry data such as traces, metrics, and logs. Crucially, OpenTelemetry is vendor- and tool-agnostic, meaning that it can be used with a broad variety of Observability backends, including open source tools like Jaeger and Prometheus, as well as commercial offerings. OpenTelemetry is a Cloud Native Computing Foundation (CNCF) project.

### `gRPC`

[`grpc.io`](https://grpc.io/)

> gRPC is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication. It is also applicable in last mile of distributed computing to connect devices, mobile applications and browsers to backend services.
>
> gRPC is a CNCF incubation project

## tools

[`www.honeycomb.io`](https://www.honeycomb.io/product-overview) / [pricing](https://www.honeycomb.io/pricing)
