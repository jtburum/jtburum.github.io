---
  title: "Kubernetes Control Plane processes explained"
  description: "Kubernetes Control Plane processes explained"
  slug: 'kubernetes-control-plane-processes-explained'
  tags: ["kubernetes"]
  pubDate: "2021-08-21"
  layout: "../layouts/BlogPostLayout.astro"
---

* This post assumes you are familiar with Kubernetes components such as pods and nodes.

Kubernetes Control Plane is the the overseer of your K8s cluster environment. It controllers the cluster state and it's nodes. The Control Plane has four distinct processes/responsibilities:
1) kube-apiserver
2) kube-scheduler
3) kube-controller-manager
4) etcd

<h3>kube-apiserver</h3>

This is how users interact with a Kubernetes cluster. When you deploy a cluster or need to make updates you will do so through the kube-apiserver which can be accessed through a command line tool like kubectl or a Kubernetes dashboard. The kube-apiserver can be thought of as the entrypoint/gateway to the cluster.

<h3>kube-scheduler</h3>

The kube-scheduler processes job is to <b>decide</b> which node to run a new pod on. This could be a pod that crashed and needs to be restarted or when deploying a new pod to the cluster. An important note is the kube-scheduler process does not actually perform the deployment of the new node, that is handled by the Kubelet process on the individual node that the pod is scheduled to run on, the kube-scheduler only job is to decide which node a pod should run within. It decides where to schedule a pod based on resource utilization of the existing nodes.

Scheduling a new pod flow:
send a request to the API server -> kube-scheduler decides where the new pod should reside in the node cluster -> kubelet on the node spins up the pod.

<h3>kube-controller-manager</h3>

This process is monitoring for changes that occur within the cluster environment. If a pod fails and a new one needs to be started in its place the kube-controller-manager will detect it this and notify the kube-scheduler.

Detecting state changes flow:
A Pod dies -> kube-controller-manager notices this event and notifies the kube-scheduler -> kube-scheduler decides where the new pod should reside in the node cluster -> kubelet on the node spins up the pod.

<h3>etcd</h3>

This is a Key Value store of a clusters state. Every time a change happens in the cluster the etcd data will be updated appropriately. It contains the data the other processes need to operate. For example:
- The kube-controller-manager is able to monitor changes a K8s cluster through the data contained in etcd.
- The kube-scheduler will look to etcd to see what node resources are available to determine where a pod should be scheduled.
- If you need to check the state of a cluster through the kube-apiserver, the server will look to etcd for that data.


Similar posts:
- [How to use a secrets file for postgres credentials using Kubernetes](https://tinytechtuts.com/2021-how-to-use-a-secrets-file-for-postgres-credentials-kubernetes)
- [When to use which service type in Kubernetes](https://tinytechtuts.com/2021-when-to-use-kubernetes-service-types-configip-loadbalancer-nodeport)
- [How to view a Kubernetes pods IP address](https://tinytechtuts.com/2021-how-to-view-kubernetes-pod-ip-address)
- [How to view the status data in a Kubernetes Deployment](https://tinytechtuts.com/2021-how-to-view-the-status-data-of-a-kubernetes-deployment)
- [Create your first Rails app cluster with Kubernetes and Docker](https://tinytechtuts.com/2021-create-your-first-kubernetes-rails-app-pt1)
- [Kubernetes kubectl commands for newbies](https://tinytechtuts.com/2021-kubernetes-kubectl-commands-for-newbies)
- [Kubernetes node processes explained](https://tinytechtuts.com/2021-kubernetes-worker-node-processes-explained)
- [Connecting Kubernetes Deployments to Pods](https://tinytechtuts.com/2021-connecting-pods-to-deployments-kubernetes)
- [Connecting Kubernetes Services to Deployments](https://tinytechtuts.com/2021-connecting-services-to-deployments-kubernetes)