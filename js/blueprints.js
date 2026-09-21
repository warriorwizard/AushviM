/**
 * AushviM Technologies - Interactive Blueprint & Architecture Explorer
 * Demonstrates the 5 Core Practice Areas:
 * 1. NCM (Nutanix Cloud Manager) - Primary Priority
 * 2. Enterprise Migration (VMware to AHV via Nutanix Move)
 * 3. Turnkey Cluster Deployment (HCI Foundation & Metro)
 * 4. NKP (Nutanix Kubernetes Platform)
 * 5. NAI (Nutanix Enterprise AI & Private LLMs)
 */

// Enterprise SVG Vector Icons Library
const svgIcons = {
  cloud: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  lb: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"></path><path d="M4 20L21 3"></path><path d="M21 16v5h-5"></path><path d="M15 15l6 6"></path><path d="M4 4l5 5"></path></svg>`,
  app: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
  db: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  sec: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
  k8s: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>`,
  ai: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
  gpu: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="8" cy="12" r="2"></circle><circle cx="16" cy="12" r="2"></circle><path d="M6 18v3M10 18v3M14 18v3M18 18v3"></path></svg>`,
  move: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>`,
  cluster: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
  vm: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line></svg>`,
  sync: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>`,
  api: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
};

const blueprintData = {
  ncm: {
    id: 'ncm',
    title: 'NCM Calm Self-Service & FinOps Automation',
    desc: 'Self-healing, auto-scaling multi-tier enterprise stack deployed across Nutanix AHV with dynamic AWS Route 53 routing, Flow microsegmentation, and automated FinOps cost governance.',
    nodes: [
      { name: 'Self-Service Portal', sub: 'NCM Calm / ServiceNow', type: 'cloud', iconKey: 'cloud' },
      { name: 'Load Balancer', sub: 'HAProxy / F5 on AHV', type: 'lb', iconKey: 'lb' },
      { name: 'App Tier Cluster', sub: 'Spring Boot (3x VMs)', type: 'app', iconKey: 'app' },
      { name: 'Database Cluster', sub: 'PostgreSQL HA + NDB', type: 'db', iconKey: 'db' },
      { name: 'FinOps & Security', sub: 'NCM Cost + Flow Microseg', type: 'sec', iconKey: 'sec' }
    ],
    actions: ['1-Click Deploy', 'Scale Out (+2 App)', 'Patch Cluster', 'FinOps Audit', 'Snapshot & Teardown'],
    code: `# Nutanix Cloud Manager (NCM) Production Blueprint Spec
name: Enterprise_NCM_MultiTier_Autonomous
version: 4.2.0
provider: Nutanix_AHV
finops_governance:
  budget_cap_monthly: 4500_USD
  auto_reclaim_idle_days: 7
  chargeback_code: "CC-FIN-9021"
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
    max_instances: 12
    package:
      install: "scripts/deploy_microservices.sh"
  - name: Database_Cluster
    type: Nutanix_Database_Service (NDB)
    engine: Postgres_HA_Cluster
    sla: Gold_Continuous_Protection
actions:
  ScaleOut:
    target: Application_Cluster
    delta: +2
    post_action: "ansible-playbook sync_lb.yml"`
  },

  migration: {
    id: 'migration',
    title: 'VMware ESXi to Nutanix AHV Live Migration Pipeline',
    desc: 'Zero-downtime, risk-free enterprise workload transition powered by Nutanix Move automation, automated driver injection, network cutover, and automated Calm rehydration.',
    nodes: [
      { name: 'Legacy Source', sub: 'VMware vSphere / SAN', type: 'vm', iconKey: 'vm' },
      { name: 'Nutanix Move', sub: 'Data Seeding Engine', type: 'move', iconKey: 'move' },
      { name: 'Target Storage', sub: 'Nutanix Distributed Storage', type: 'db', iconKey: 'db' },
      { name: 'Target Hypervisor', sub: 'Nutanix AHV Cluster', type: 'cluster', iconKey: 'cluster' },
      { name: 'Cutover & Audit', sub: 'Instant Zero-Downtime Swap', type: 'sec', iconKey: 'sec' }
    ],
    actions: ['Discover vSphere VMs', 'Start Data Seeding', 'Verify Test Failover', 'Cutover Workload', 'Decommission ESXi'],
    code: `# Nutanix Move Automated Migration Plan Spec
migration_plan:
  name: VMware_ESXi_to_AHV_Factory_01
  source_environment:
    type: VMware_vSphere_7.0
    vcenter: "vcsa-prod.corp.internal"
  target_environment:
    type: Nutanix_AHV_Cluster
    prism_central: "pc-prod.corp.internal"
    storage_container: "AHV-SSD-Tier-01"
  network_mapping:
    source_portgroup: "DPortGroup-VLAN20"
    target_ahv_network: "AHV-Prod-VLAN20"
  settings:
    auto_install_virtio_drivers: true
    retain_mac_addresses: true
    max_concurrent_seeds: 16
    cutover_schedule: "immediate_on_sync"
    post_migration_hook: "ncm_calm_rehydrate.py"`
  },

  cluster: {
    id: 'cluster',
    title: 'Turnkey Multi-Cluster HCI Deployment & Metro Availability',
    desc: 'Automated bare-metal Nutanix Foundation discovery, multi-node AHV hyperconverged clustering, Prism Central federation, synchronous Metro replication, and automated DR.',
    nodes: [
      { name: 'Hardware Discovery', sub: 'Nutanix Foundation', type: 'cluster', iconKey: 'cluster' },
      { name: 'AHV HCI Nodes', sub: '4-Node Enterprise Pod', type: 'app', iconKey: 'app' },
      { name: 'Storage Fabric', sub: 'AOS Distributed Storage', type: 'db', iconKey: 'db' },
      { name: 'Prism Central', sub: 'Multi-Cluster Federation', type: 'cloud', iconKey: 'cloud' },
      { name: 'Metro Witness', sub: 'Zero-RPO Synchronous DR', type: 'sync', iconKey: 'sync' }
    ],
    actions: ['Foundation Discovery', 'Deploy AOS & AHV', 'Init Storage Pool', 'Register Prism Central', 'Enable Metro DR'],
    code: `# Nutanix Foundation Cluster Deployment Specification
cluster_name: "AUSHVIM-PROD-HCI-01"
hypervisor: "Nutanix_AHV"
nos_version: "6.8.1_LTS"
redundancy_factor: 2
nodes:
  - ipmi_ip: "10.10.40.11"
    host_ip: "10.10.10.11"
    cvm_ip:  "10.10.10.21"
  - ipmi_ip: "10.10.40.12"
    host_ip: "10.10.10.12"
    cvm_ip:  "10.10.10.22"
  - ipmi_ip: "10.10.40.13"
    host_ip: "10.10.10.13"
    cvm_ip:  "10.10.10.23"
  - ipmi_ip: "10.10.40.14"
    host_ip: "10.10.10.14"
    cvm_ip:  "10.10.10.24"
virtual_ip: "10.10.10.100"
prism_central_vip: "10.10.20.50"`
  },

  nkp: {
    id: 'nkp',
    title: 'NKP: Nutanix Kubernetes Platform Production Architecture',
    desc: 'Enterprise cloud-native Kubernetes deployed natively on Nutanix AHV. Declarative Cluster API (CAPI) provisioning, Cilium CNI, automated GitOps deployment, and CSI persistent volumes.',
    nodes: [
      { name: 'GitOps / ArgoCD', sub: 'Declarative K8s Manifests', type: 'api', iconKey: 'api' },
      { name: 'NKP Control Plane', sub: 'CAPI Multi-Master HA', type: 'k8s', iconKey: 'k8s' },
      { name: 'Worker Pool', sub: 'Auto-Scaling AHV Nodes', type: 'app', iconKey: 'app' },
      { name: 'CSI Storage', sub: 'Nutanix Volumes / Files', type: 'db', iconKey: 'db' },
      { name: 'Cilium Network', sub: 'eBPF Security & Ingress', type: 'sec', iconKey: 'sec' }
    ],
    actions: ['Provision NKP Cluster', 'Attach Nutanix CSI', 'Deploy Cilium CNI', 'Scale Worker Nodes', 'Rolling K8s Upgrade'],
    code: `# Nutanix Kubernetes Platform (NKP) Declarative Spec
apiVersion: cluster.x-k8s.io/v1beta1
kind: Cluster
metadata:
  name: nkp-production-cluster
  namespace: default
spec:
  clusterNetwork:
    services:
      cidrBlocks: ["10.96.0.0/12"]
    pods:
      cidrBlocks: ["192.168.0.0/16"]
  topology:
    class: nkp-ahv-cluster-class
    version: v1.30.2
    controlPlane:
      replicas: 3
    workers:
      machineDeployments:
        - class: default-worker
          name: ahv-worker-pool
          replicas: 6
---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: nutanix-volume-sc
provisioner: csi.nutanix.com
parameters:
  prismEndpoint: "prism-central.internal:9440"
  storageContainer: "K8s-Storage-Pool"`
  },

  nai: {
    id: 'nai',
    title: 'NAI: Nutanix Enterprise AI & Private GenAI Infrastructure',
    desc: 'Private, secure enterprise LLM inference and RAG pipelines running on Nutanix AHV. NVIDIA vGPU acceleration, vLLM high-throughput model serving, and zero-data-leakage enterprise AI agents.',
    nodes: [
      { name: 'AI Client / Agent', sub: 'Enterprise RAG & Chat', type: 'api', iconKey: 'api' },
      { name: 'vLLM Serving Pod', sub: 'High-Throughput Model Host', type: 'ai', iconKey: 'ai' },
      { name: 'NVIDIA vGPU Pod', sub: 'NVIDIA H100/L40S on AHV', type: 'gpu', iconKey: 'gpu' },
      { name: 'Vector DB Cluster', sub: 'Milvus / pgvector on NDB', type: 'db', iconKey: 'db' },
      { name: 'Data Governance', sub: 'Air-Gapped Privacy Shield', type: 'sec', iconKey: 'sec' }
    ],
    actions: ['Deploy vLLM Engine', 'Attach NVIDIA vGPU', 'Load Llama-3 / Mistral', 'Benchmark Inference', 'Sync Enterprise RAG'],
    code: `# Nutanix Enterprise AI (NAI) vLLM Deployment Spec
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nai-private-llm-service
  labels:
    app: vllm-inference
spec:
  replicas: 2
  template:
    spec:
      containers:
      - name: vllm-container
        image: vllm/vllm-openai:latest
        args: ["--model", "meta-llama/Meta-Llama-3-70B-Instruct", "--tensor-parallel-size", "2"]
        resources:
          limits:
            nvidia.com/gpu: 2
        env:
          - name: NUTANIX_AI_SECURITY_MODE
            value: "STRICT_AIR_GAPPED"
          - name: MAX_MODEL_LEN
            value: "8192"
      volumes:
      - name: model-cache
        persistentVolumeClaim:
          claimName: nutanix-nai-model-pvc`
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
      logConsole.innerHTML = `<span class="terminal-prompt">></span> Loaded architecture spec: <span class="terminal-info">${data.title}</span>. State: READY.`;
    }
  }

  function simulateAction(actionName, blueprintTitle) {
    if (!logConsole) return;
    const now = new Date().toTimeString().split(' ')[0];
    logConsole.innerHTML = `
      <div><span class="terminal-prompt">[${now}] ></span> Executing Action: <span class="terminal-info">${actionName}</span> on [${blueprintTitle}]...</div>
      <div><span class="terminal-prompt">[${now}] ></span> Validating Nutanix Prism Central & AHV resource pool... <span class="terminal-success">OK</span></div>
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

  // Initial render (NCM as primary priority)
  renderBlueprint('ncm');
});
