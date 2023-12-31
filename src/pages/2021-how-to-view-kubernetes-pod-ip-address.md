---
  title: "How to view a Kubernetes pods IP address"
  description: "How to view a Kubernetes pods IP address"
  slug: 'kubernetes-control-plane-processes-explained'
  tags: ["kubernetes"]
  pubDate: "2021-08-20"
  layout: "../layouts/BlogPostLayout.astro"
---

To begin you will first need to get the ID of the pod whose IP address you are looking for using the command:

```
kubectl get pods
```

This will give you a list of pods your Kubernetes environment knows about along with status data. The `NAME` column is the ID for each pod.

Then you can use the below command to get the IP address and additional data about the pod:

```
kubectl get pod reporting-app-deployment-8678d5688b-n2xvb -o wide
```

Using the above command without the option `-o wide` would only have rendered the status data mentioned previously.

Similar posts:
- [How to use a secrets file for postgres credentials using Kubernetes](https://tinytechtuts.com/2021-how-to-use-a-secrets-file-for-postgres-credentials-kubernetes)
- [When to use which service type in Kubernetes](https://tinytechtuts.com/2021-when-to-use-kubernetes-service-types-configip-loadbalancer-nodeport)
- [How to view the status data in a Kubernetes Deployment](https://tinytechtuts.com/2021-how-to-view-the-status-data-of-a-kubernetes-deployment)
- [Create your first Rails app cluster with Kubernetes and Docker](https://tinytechtuts.com/2021-create-your-first-kubernetes-rails-app-pt1)
- [Kubernetes kubectl commands for newbies](https://tinytechtuts.com/2021-kubernetes-kubectl-commands-for-newbies)
- [Kubernetes node processes explained](https://tinytechtuts.com/2021-kubernetes-worker-node-processes-explained)
- [Connecting Kubernetes Deployments to Pods](https://tinytechtuts.com/2021-connecting-pods-to-deployments-kubernetes)
- [Connecting Kubernetes Services to Deployments](https://tinytechtuts.com/2021-connecting-services-to-deployments-kubernetes)