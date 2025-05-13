---
title: The Terraform Associate Learning Path
description: List of concepts to understand for the Terraform Associate Certification 003.
---

## Introduction

In this guide, I condensed all knowledge gathered (March 2025) from the [_"The Terraform Associate Learning Path"_](https://developer.hashicorp.com/terraform/tutorials/certification-003/associate-study-003)

In this introduction, I want to note that it is fundamental to know:

* That the last terraform release which was open source was [the `v1.5.7` release](https://github.com/hashicorp/terraform/releases/tag/v1.5.7). You can chek indeed:
  * <https://github.com/hashicorp/terraform/blob/v1.6.0/LICENSE> is a non open source License.
  * <https://github.com/hashicorp/terraform/blob/v1.6.0-rc1/LICENSE> is a non open source License.
  * <https://github.com/hashicorp/terraform/blob/v1.5.7/LICENSE> is the original Mozilla Public License.
* That therefore, all examples in this book are tested with terraform version `v1.5.7`, and with the OpenTofu recent (April 2025) releases: `v1.7.2` and `v1.9.0`.

> On August 10th, 2023, HashiCorp made the announcement of shifting the license for all its products from Mozilla Public License (MPL) to the Business Source License (BSL).

## Learn about Infrastructure As Code

### Infrastructure as Code introduction video

References:

* The video is here : <https://www.youtube.com/watch?v=RO7VcUAsf-I>
* The transcript of the video is here: <https://www.hashicorp.com/en/resources/what-is-infrastructure-as-code>

This part just tries to define what _**Infrastructure As Code**_ is.

I keep from that part, that:

* Infrastructure as code is:
  * Writing code to automate provisioning of infrastructure
  * version control that code
  * An is a paradigm of Infrastructure management,  opposed to the more ancient paradigm which consist in using a web ui provision infrasturcture by clicking buttons and or opening tickets.

### Introduction to IaC documentation

References:

* <https://developer.hashicorp.com/terraform/intro>

Terraform creates and manages resources through application programming interfaces (APIs).

For each API that terraform uses (to create and manage resources), terraform uses one provider specific to that API.

Providers enable Terraform to work with virtually any platform or service with an accessible API.

terraform uses a terraform registry, to find any provider it needs to use.

The core Terraform workflow consists of three stages:

* `Write`: You define resources, which may be across multiple cloud providers and services. You write the code in files, mainly `*.tf`, `*.tfvars` files.

* `Plan`: you run the `terraform plan` command. Terraform creates an execution plan describing the infrastructure it will create, update, or destroy based on the existing infrastructure and your configuration.

* `Apply`: you run the `terraform apply` command. On approval, Terraform performs the proposed operations in the correct order, respecting any resource dependencies, exactly as specified in the plan. For example, if you update the properties of a VPC and change the number of virtual machines in that VPC, Terraform will recreate the VPC before scaling the virtual machines.

Also a video to watch: <https://www.youtube.com/watch?v=h970ZBgKINg>

Exercizes to do:

* Use the cloud init provider: <https://registry.terraform.io/providers/hashicorp/cloudinit/latest/docs/resources/config>

### Introduction to Infrastructure as Code with Terraform

References:

* <https://developer.hashicorp.com/terraform/tutorials/aws-get-started/infrastructure-as-code>

The advantages of terraform are:

* Terraform can manage infrastructure on multiple cloud platforms.
* The human-readable configuration language helps you write infrastructure code quickly.
* Terraform's state allows you to track resource changes throughout your deployments.
* You can commit your configurations to version control to safely collaborate on infrastructure.

Terraform's configuration language is declarative, it is based on HCL, the Hashicorp Configuration Language which is opensource:

* <https://github.com/hashicorp/hcl>
* <https://github.com/hashicorp/hcl-lang>

HCL is used by other HAshicorp products, such as Packer, and Consul.

Terraform providers automatically calculate dependencies between resources to create or destroy them in the correct order.

The typical everyday workflow when working with terraform is:

* **Scope** - Identify the infrastructure for your project.
* **Author** - Write the configuration for your infrastructure.
* **Initialize** - Install the plugins Terraform needs to manage the infrastructure.
* **Plan** - Preview the changes Terraform will make to match your configuration.
* **Apply** - Make the planned changes.

_**Tracking your infrastructure changes**_

Terraform keeps track of your real infrastructure in a state file, which acts as a source of truth for your environment.

Terraform uses the state file to determine the changes to make to your infrastructure so that it will match your configuration.

_**Collaborate**_

To be able collaborate in a team of several people, when you work with terraform:

* You need to use remote state backends: if you version control the state file in the same git repository, than the terraform configuration files, it is _not_ possible to collaborate.
* You need to use remote state backends: and that remote backend must support the feature of preventing race conditions (for example using a state locking mechanism, ie, a semaphore mechanism).

The HCP Terraform service:

* offers a terraform backend service offered by the Hashicorp company, which is free up to 5 users (true in April 2025).
* You can also connect HCP Terraform to version control systems (VCSs) like GitHub, GitLab, and others, allowing it to automatically propose infrastructure changes when you commit configuration changes to VCS. This lets you manage changes to your infrastructure through version control, as you would with application code. (this connection to git services is similar to runatlantis.io)

Exercize:

* build and destroy a Docker container using terraform.

### Infrastructure as Code in a Private or Public Cloud blog post

A blog post to read: https://www.hashicorp.com/blog/infrastructure-as-code-in-a-private-or-public-cloud/?product_intent=terraform

It gives what are the benefits of infrastruture as code:

* IaC and the Infrastructure Lifecycle:
  * **_Day 0_** code provisions and configures your initial infrastructure.
  * **_Day 1_** refers to OS and application configurations you apply after you’ve initially built your infrastructure.
  * IaC allows easy and quick change on infrastructure because it is possible to use a common language to provision one infrastructure spread over multiple cloud providers (AWS, GCP Azure, etc)
* **IaC Makes Infrastructure More Reliable**
* **IaC Makes Infrastructure More Manageable**
* **IaC Makes Sense**: because infrastructure lifecycle management is hard, and bad decisions can lead to significant losses, the benefits of IaC make IaC adoption a deision that make sense.

And the link to one interesting tutorial:

* <https://learn.hashicorp.com/tutorials/terraform/multicloud-kubernetes#deploy-an-application>

### Terraform use cases documentation

Ref.: https://developer.hashicorp.com/terraform/intro/v1.1.x/use-cases

* Multi-Cloud Deployment, eg:
  * https://developer.hashicorp.com/terraform/tutorials/networking/multicloud-kubernetes
* Application Infrastructure Deployment, Scaling, and Monitoring Tools, eg:
  * <https://developer.hashicorp.com/terraform/tutorials/applications/datadog-provider>
  * <https://developer.hashicorp.com/terraform/tutorials/aws/blue-green-canary-tests-deployments>
* Self-Service infrastructure:
  * Try the Use Modules from the Registry tutorial to get started using public modules in your Terraform configuration. Try the Build and Use a Local Module tutorial on HashiCorp Learn to create a module to manage AWS S3 buckets.
  * Follow these ServiceNow Service Catalog Integration Setup Instructions to connect ServiceNow to Terraform Cloud.

## Review Terraform fundamentals

Ref.: <https://developer.hashicorp.com/terraform/tutorials/certification-003/associate-study-003#review-terraform-fundamentals>
