---
title: The Associate Learning Path
description: List of concepts to understand for the Terraform Associate Certification 003.
---

## Introduction

In this guide, I condensed all knowledge gathered (March 2025) from the [_"The Associate Learning Path"_](https://developer.hashicorp.com/terraform/tutorials/certification-003/associate-study-003)

In this introduction, I want to note that it is fundamental to know:

* That the last terraform release which was open source was [the `v1.5.7` release](https://github.com/hashicorp/terraform/releases/tag/v1.5.7). You can chek indeed:
  * <https://github.com/hashicorp/terraform/blob/v1.6.0/LICENSE> is a non open source License.
  * <https://github.com/hashicorp/terraform/blob/v1.6.0-rc1/LICENSE> is a non open source License.
  * <https://github.com/hashicorp/terraform/blob/v1.5.7/LICENSE> is the original Mozilla Public License.
* That therefore, all examples in this book are tested with terraform version `v1.5.7`, and with the OpenTofu recent (April 2025) releases: `v1.7.2` and `v1.9.0`.

> On August 10th, 2023, HashiCorp made the announcement of shifting the license for all its products from Mozilla Public License (MPL) to the Business Source License (BSL).

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

### Introdcution to IaC documentation

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

### ccc
