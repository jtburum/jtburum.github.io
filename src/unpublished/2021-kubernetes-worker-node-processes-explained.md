---
  title: "Kubernetes node processes explained"
  description: "Kubernetes node processes explained"
  slug: 'kubernetes-node-processes-explained'
  tags: ["kubernetes"]
  pubDate: "2021-08-22"
  layout: "../layouts/BlogPostLayout.astro"
---

* This post assumes some familiarity with Kubernetes components such as pods, nodes, and services.

Every worker node in a K8's environment will have 3 processes running on the server.
1) Container runtime
2) Kubelet
3) kube-proxy

<h3>1) Container runtime</h3>
This is the process responsible for running the pod containers. It is a not a K8's specific process, it is the process of the container system you are using, for example Docker.

<h3>2) kubelet</h3>
This is a K8's process that is responsible for running and stopping pods on a node as well as assigning resources to the pods container. This process interfaces with both the container runtime and the node itself.

<h3>3) kube-proxy</h3>
In a K8's environment there will usually be replicas of each node for failover and load balancing. The K8's components that are responsible for managing what requests go to which node is called a service and a service uses another K8's worker process called kube-proxy to actually do the intelligent request forwarding.

Similar posts:
- [How to use a secrets file for postgres credentials using Kubernetes](https://www.devdecks.io/2021-how-to-use-a-secrets-file-for-postgres-credentials-kubernetes)
- [When to use which service type in Kubernetes](https://www.devdecks.io/2021-when-to-use-kubernetes-service-types-configip-loadbalancer-nodeport)
- [How to view a Kubernetes pods IP address](https://www.devdecks.io/2021-how-to-view-kubernetes-pod-ip-address)
- [How to view the status data in a Kubernetes Deployment](https://www.devdecks.io/2021-how-to-view-the-status-data-of-a-kubernetes-deployment)
- [Create your first Rails app cluster with Kubernetes and Docker](https://www.devdecks.io/2021-create-your-first-kubernetes-rails-app-pt1)
- [Kubernetes kubectl commands for newbies](https://www.devdecks.io/2021-kubernetes-kubectl-commands-for-newbies)
- [Connecting Kubernetes Deployments to Pods](https://www.devdecks.io/2021-connecting-pods-to-deployments-kubernetes)
- [Connecting Kubernetes Services to Deployments](https://www.devdecks.io/2021-connecting-services-to-deployments-kubernetes)