# Azure DevOps to GitHub Migration Guide

A comprehensive checklist for migrating from Azure DevOps to GitHub Enterprise, organized in logical stages to ensure a smooth transition.

## Overview

This document outlines the key stages and steps required for a successful migration from Azure DevOps to GitHub, covering all major components including repositories, work items, pipelines, artifacts, and security configurations.

## Migration checklist:
Microsoft Azure DevOps Migration checklist:

### Stage 1: Preparation
- Repository and CD analysis
- Migration strategy selection

### Stage 2: Code Migration
- Git repository export
- Import repository to GitHub
- Code validation

### Stage 3: Work Items Migration
- Export backlog from Azure DevOps
- Convert and import to GitHub Issues

### Stage 4: CI/CD Migration
- Export Azure Pipelines
- Rewrite to GitHub Actions
- Testing and optimization

### Stage 5: Artifacts and Documentation Migration
- Export Azure Artifacts
- Import to GitHub Packages
- Wiki migration to GitHub

### Stage 6: Permissions and Security
- SSO and roles configuration
- Transfer webhooks and integrations
- System testing and optimization


## Migration Stages explanation:

### Stage 1: Preparation
Initial assessment and planning phase to determine scope and strategy.

### Stage 2: Code Migration 
Source code repository transfer ensuring all history and branches are preserved.

### Stage 3: Work Items Migration
Converting Azure DevOps work items to GitHub Issues while maintaining relationships.

### Stage 4: CI/CD Migration
Transforming Azure Pipelines into equivalent GitHub Actions workflows.

### Stage 5: Artifacts and Documentation
Moving artifacts and wiki content to GitHub's ecosystem.

### Stage 6: Security and Integration
Configuring access controls and maintaining existing integrations.

## Prerequisites

- Access to both Azure DevOps and GitHub Enterprise accounts
- Administrative permissions in both platforms
- GitHub Migration API access
- Backup of all Azure DevOps data

## Best Practices

- Perform migration in stages
- Test each component after migration
- Maintain detailed documentation of the process
- Plan for downtime during critical migrations
- Validate security configurations

## Additional Resources

- [GitHub Migration Tools](https://github.com/github/gh-migration-tools)
- [Azure DevOps Migration Documentation](https://docs.microsoft.com/en-us/azure/devops/migrate)
- [GitHub Actions Migration Guide](https://docs.github.com/en/actions/migrating-to-github-actions)

## Support

For assistance with migration issues:
- GitHub Enterprise Support
- Azure DevOps Support
- Internal DevOps team

## License

This migration guide is licensed under [MIT License](LICENSE).

