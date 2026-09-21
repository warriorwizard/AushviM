/**
 * AushviM Technologies - Interactive Blueprint & Architecture Explorer
 * Demonstrates Nutanix Cloud Manager (NCM) Calm Blueprints & Hybrid Orchestration.
 * Clean, Bespoke Enterprise Architecture - Zero Emojis, Pure SVG Vector Icons.
 */

// Enterprise SVG Vector Icons Library
const svgIcons = {
  cloud: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  lb: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"></path><path d="M4 20L21 3"></path><path d="M21 16v5h-5"></path><path d="M15 15l6 6"></path><path d="M4 4l5 5"></path></svg>`,
  app: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
  db: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  sec: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
  portal: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
  gate: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  api: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  cluster: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
  cmdb: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,
  git: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
  tf: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
  scan: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  vm: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line></svg>`,
  msg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
  dc1: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="22.01"></line><line x1="15" y1="22" x2="15" y2="22.01"></line><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="16" y2="10"></line><line x1="8" y1="14" x2="16" y2="14"></line></svg>`,
  sync: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>`,
  nc2: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
  runbook: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  dns: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
};

const blueprintData = {
  tier3: {
    id: 'tier3',
    title: 'Enterprise 3-Tier Hybrid App Blueprint',
    desc: 'Self-healing, auto-scaling multi-tier stack deployed across Nutanix AHV with dynamic AWS Route 53 global traffic routing and Flow microsegmentation.',
    nodes: [
      { name: 'Global DNS / WAF', sub: 'AWS Route53 / Cloudflare', type: 'cloud', iconKey: 'cloud' },
      { name: 'Load Balancer', sub: 'HAProxy / F5 on AHV', type: 'lb', iconKey: 'lb' },
      { name: 'App Tier Cluster', sub: 'Spring Boot (3x VMs)', type: 'app', iconKey: 'app' },
      { name: 'Database Cluster', sub: 'PostgreSQL HA + NDB', type: 'db', iconKey: 'db' },
      { name: 'Security Policy', sub: 'Nutanix Flow Policy', type: 'sec', iconKey: 'sec' }
    ],
    actions: ['Deploy', 'Scale Out (+2 App)', 'Rolling Patch', 'Snapshot', 'Teardown'],
    code: `# Nutanix Cloud Manager (NCM) Calm Blueprint Spec
name: Enterprise_3Tier_Production
version: 3.4.0
provider: Nutanix_AHV
credentials:
  - name: CENTOS_ADMIN
    type: SSH_KEY
services:
  - name: Web_LoadBalancer
    type: AHV_VM
    vcpus: 2
    memory_gb: 4
    subnet: Prod_DMZ_VLAN10
  - name: Application_Cluster
    type: AHV_VM
    instances: 3
    min_instances: 2
    max_instances: 10
    package:
      install: "scripts/deploy_app.sh"
  - name: Database_Cluster
    type: Nutanix_Database_Service (NDB)
    sla: Gold_Daily_Continuous
actions:
  ScaleOut:
    target: Application_Cluster
    delta: +2
    post_action: "ansible-playbook rebalance_lb.yml"`
  },

  servicenow: {
    id: 'servicenow',
    title: 'ServiceNow ITOM to NCM Self-Service Pipeline',
    desc: 'Zero-touch enterprise service catalog integration. Business users request cloud environments in ServiceNow; NCM Calm validates quota, orchestrates approval, and provisions on Nutanix AHV.',
    nodes: [
      { name: 'Service Portal', sub: 'ServiceNow Catalog', type: 'portal', iconKey: 'portal' },
      { name: 'Approval Gate', sub: 'Manager Auto-Workflow', type: 'gate', iconKey: 'gate' },
      { name: 'NCM Calm API', sub: 'REST / Mid-Server Call', type: 'api', iconKey: 'api' },
      { name: 'Prism Central', sub: 'AHV Resource Allocation', type: 'cluster', iconKey: 'cluster' },
      { name: 'CMDB Sync', sub: 'Automated CI Creation', type: 'cmdb', iconKey: 'cmdb' }
    ],
    actions: ['Catalog Request', 'Approve Ticket', 'Execute Blueprint', 'Update CMDB', 'Reclaim'],
    code: `# ServiceNow Mid-Server to Nutanix NCM REST Integration
POST https://prism-central.corp.internal:9440/api/nutanix/v3/blueprints/{bp_uuid}/launch
Headers:
  Authorization: Bearer <CALM_OAUTH_TOKEN>
  Content-Type: application/json
Body:
{
  "spec": {
    "app_name": "SNOW-REQ-88491-Analytics",
    "app_description": "Auto-provisioned via ServiceNow Catalog by Platform Eng",
    "runtime_editables": {
      "variable_list": [
        { "name": "ENV_TIER", "value": "Production" },
        { "name": "VM_CORE_COUNT", "value": "8" },
        { "name": "COST_CENTER", "value": "CC-FIN-4021" }
      ]
    }
  }
}`
  },

  devops: {
    id: 'devops',
    title: 'DevSecOps & Infrastructure as Code (Terraform on AHV)',
    desc: 'Full GitOps CI/CD delivery pipeline. Developers commit code; automated pipeline invokes Nutanix Terraform Provider, provisions immutable ephemeral dev environments, and triggers automated regression test suites.',
    nodes: [
      { name: 'GitLab / GitHub', sub: 'GitOps Repository', type: 'git', iconKey: 'git' },
      { name: 'Terraform Engine', sub: 'Nutanix Provider v1.9', type: 'tf', iconKey: 'tf' },
      { name: 'Static Code Scan', sub: 'SonarQube & Trivy', type: 'scan', iconKey: 'scan' },
      { name: 'AHV Ephemeral Env', sub: 'Nutanix AHV Cluster', type: 'vm', iconKey: 'vm' },
      { name: 'Slack Webhook', sub: 'Pipeline Alerting', type: 'msg', iconKey: 'msg' }
    ],
    actions: ['Commit PR', 'Terraform Plan', 'Apply to AHV', 'Run Security Audit', 'Auto-Destroy'],
    code: `# Terraform HCL - Nutanix Cloud Manager Provider
terraform {
  required_providers {
    nutanix = {
      source  = "nutanix/nutanix"
      version = ">= 1.9.0"
    }
  }
}

resource "nutanix_virtual_machine" "dev_ephemeral_worker" {
  name                 = "gitops-worker-\${var.commit_sha}"
  cluster_uuid         = data.nutanix_cluster.ahv_cluster.id
  num_vcpus_per_socket = 2
  num_sockets          = 2
  memory_size_mib      = 8192

  nic_list {
    subnet_uuid = data.nutanix_subnet.devops_vlan.id
  }

  disk_list {
    data_source_reference = {
      kind = "image"
      uuid = data.nutanix_image.ubuntu_golden_image.id
    }
  }
}`
  },

  dr: {
    id: 'dr',
    title: 'Hybrid Cloud Disaster Recovery & NC2 Orchestration',
    desc: 'Mission-critical continuous protection. Orchestrated replication from on-premise Nutanix AHV to Nutanix Cloud Clusters (NC2) on AWS/Azure with automated RTO < 15 minute failover runbooks.',
    nodes: [
      { name: 'On-Prem AHV', sub: 'Primary Production DC', type: 'dc1', iconKey: 'dc1' },
      { name: 'Nutanix Protection', sub: 'NearSync Async Replication', type: 'sync', iconKey: 'sync' },
      { name: 'NC2 on AWS', sub: 'Elastic Secondary Cloud', type: 'nc2', iconKey: 'nc2' },
      { name: 'NCM Runbook', sub: 'Automated IP Re-mapping', type: 'runbook', iconKey: 'runbook' },
      { name: 'Global Traffic', sub: 'Automated Failover DNS', type: 'dns', iconKey: 'dns' }
    ],
    actions: ['Simulate DC Outage', 'Trigger Failover', 'Promote NC2 VMs', 'Re-map DNS', 'Failback'],
    code: `# Nutanix Cloud Manager DR Runbook Spec
disaster_recovery_plan:
  name: Enterprise_Production_Failover_NC2
  source_cluster: "OnPrem-DC-Cluster-01 (AHV)"
  target_cluster: "AWS-NC2-Cluster-US-East"
  rpo_target: "15_minutes"
  rto_target: "30_minutes"
  
  execution_steps:
    1. verify_snapshot_integrity:
         status: pass
    2. power_off_source_vms:
         timeout_sec: 180
    3. start_nc2_target_vms:
         priority_order: [DB_Tier, App_Tier, Web_Tier]
    4. execute_network_mapping:
         onprem_vlan: "VLAN_10_Prod"
         nc2_subnet: "aws-vpc-subnet-prod-a"
    5. trigger_flow_security_sync:
         enforce_microsegmentation: true`
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.bp-tab-btn');
  const bpTitle = document.getElementById('bp-title');
  const bpDesc = document.getElementById('bp-desc');
  const nodesContainer = document.getElementById('bp-nodes');
  const actionsBar = document.getElementById('bp-actions');
  const codeContent = document.getElementById('bp-code');
  const copyBtn = document.getElementById('bp-copy-btn');
  const logConsole = document.getElementById('bp-live-log');

  if (!tabs.length || !nodesContainer) return;

  function renderBlueprint(key) {
    const data = blueprintData[key];
    if (!data) return;

    bpTitle.textContent = data.title;
    bpDesc.textContent = data.desc;
    codeContent.textContent = data.code;

    // Render topology nodes with clean SVG icons
    nodesContainer.innerHTML = '';
    data.nodes.forEach(node => {
      const iconMarkup = svgIcons[node.iconKey] || svgIcons.app;
      const nodeEl = document.createElement('div');
      nodeEl.className = 'topo-node';
      nodeEl.innerHTML = `
        <div class="node-box">${iconMarkup}</div>
        <div class="node-label">${node.name}</div>
        <div class="node-sub">${node.sub}</div>
      `;
      nodesContainer.appendChild(nodeEl);
    });

    // Render lifecycle action chips
    actionsBar.innerHTML = '<span class="actions-label"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Runbook Actions:</span>';
    data.actions.forEach((act, idx) => {
      const chip = document.createElement('button');
      chip.className = `action-chip ${idx === 0 ? 'active' : ''}`;
      chip.textContent = act;
      chip.addEventListener('click', () => {
        document.querySelectorAll('.action-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        simulateAction(act, data.title);
      });
      actionsBar.appendChild(chip);
    });

    if (logConsole) {
      logConsole.innerHTML = `<span class="terminal-prompt">></span> Loaded blueprint spec: <span class="terminal-info">${data.title}</span>. State: READY.`;
    }
  }

  function simulateAction(actionName, blueprintTitle) {
    if (!logConsole) return;
    const now = new Date().toTimeString().split(' ')[0];
    logConsole.innerHTML = `
      <div><span class="terminal-prompt">[${now}] ></span> Executing Action: <span class="terminal-info">${actionName}</span> on [${blueprintTitle}]...</div>
      <div><span class="terminal-prompt">[${now}] ></span> Validating Prism Central quotas & AHV resource pool... <span class="terminal-success">OK</span></div>
      <div><span class="terminal-prompt">[${now}] ></span> Orchestration status: <span class="terminal-success">SUCCESS (Execution completed in 1.42s)</span></div>
    `;
  }

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.getAttribute('data-bp');
      renderBlueprint(key);
    });
  });

  // Copy code button
  if (copyBtn && codeContent) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeContent.textContent).then(() => {
        const origText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = origText;
        }, 2000);
      });
    });
  }

  // Initial render
  renderBlueprint('tier3');
});
