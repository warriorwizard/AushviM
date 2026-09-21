/**
 * AushviM Technologies - NCM ROI & FinOps Savings Estimator
 * Calculates enterprise provisioning time savings and FinOps waste reclamation.
 */

document.addEventListener('DOMContentLoaded', () => {
  const vmsSlider = document.getElementById('slider-vms');
  const timeSlider = document.getElementById('slider-time');
  const spendSlider = document.getElementById('slider-spend');

  const vmsValBadge = document.getElementById('val-vms');
  const timeValBadge = document.getElementById('val-time');
  const spendValBadge = document.getElementById('val-spend');

  const hoursSavedEl = document.getElementById('kpi-hours-saved');
  const finopsReclaimEl = document.getElementById('kpi-finops-saved');
  const totalValueEl = document.getElementById('kpi-total-value');
  const roiVelocityEl = document.getElementById('kpi-velocity');

  const presetBtns = document.querySelectorAll('.preset-btn');

  if (!vmsSlider || !timeSlider || !spendSlider) return;

  function formatCurrency(num) {
    return '$' + Math.round(num).toLocaleString('en-US');
  }

  function formatNumber(num) {
    return Math.round(num).toLocaleString('en-US');
  }

  function calculateROI() {
    const vms = parseInt(vmsSlider.value, 10);
    const manualHours = parseFloat(timeSlider.value);
    const monthlySpend = parseInt(spendSlider.value, 10);

    // Update slider badges
    vmsValBadge.textContent = formatNumber(vms) + ' VMs';
    timeValBadge.textContent = manualHours + (manualHours === 1 ? ' Hour' : ' Hours');
    spendValBadge.textContent = '$' + (monthlySpend / 1000) + 'k/mo';

    // Assumption parameters based on enterprise Nutanix Calm & FinOps benchmarks
    const provisioningEventsPerVMPerYear = 3.2; // lifecycle changes, reprovisions, scaling
    const automationEfficiency = 0.92; // 92% provisioning reduction via NCM Self-Service
    const blendedEngineerHourlyRate = 85; // $85/hour enterprise blended devops/sysadmin rate
    const finopsReclamationRate = 0.28; // 28% average cloud waste reclaimed (idle VMs, unattached disks, right-sizing)

    // 1. Engineering hours saved
    const totalManualHoursAnnual = vms * provisioningEventsPerVMPerYear * manualHours;
    const hoursSavedAnnual = totalManualHoursAnnual * automationEfficiency;

    // 2. Engineering dollar value saved
    const engDollarsSaved = hoursSavedAnnual * blendedEngineerHourlyRate;

    // 3. FinOps cloud waste reclaimed
    const annualCloudSpend = monthlySpend * 12;
    const finopsSavedAnnual = annualCloudSpend * finopsReclamationRate;

    // 4. Net total annual business value
    const totalAnnualValue = engDollarsSaved + finopsSavedAnnual;

    // 5. Velocity multiplier (time reduction factor)
    const velocityFactor = Math.round(manualHours / Math.max(manualHours * (1 - automationEfficiency), 0.2));

    // Update results
    hoursSavedEl.textContent = formatNumber(hoursSavedAnnual) + ' hrs/yr';
    finopsReclaimEl.textContent = formatCurrency(finopsSavedAnnual) + '/yr';
    totalValueEl.textContent = formatCurrency(totalAnnualValue);
    roiVelocityEl.textContent = velocityFactor + 'x Faster';
  }

  // Event Listeners for Sliders
  vmsSlider.addEventListener('input', () => {
    presetBtns.forEach(btn => btn.classList.remove('active'));
    calculateROI();
  });
  timeSlider.addEventListener('input', () => {
    presetBtns.forEach(btn => btn.classList.remove('active'));
    calculateROI();
  });
  spendSlider.addEventListener('input', () => {
    presetBtns.forEach(btn => btn.classList.remove('active'));
    calculateROI();
  });

  // Presets
  const presets = {
    mid: { vms: 250, time: 6, spend: 35000 },
    enterprise: { vms: 500, time: 8, spend: 60000 },
    large: { vms: 1500, time: 12, spend: 180000 },
    global: { vms: 3000, time: 20, spend: 350000 }
  };

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const p = presets[btn.getAttribute('data-preset')];
      if (p) {
        vmsSlider.value = p.vms;
        timeSlider.value = p.time;
        spendSlider.value = p.spend;
        calculateROI();
      }
    });
  });

  // Initial calculation
  calculateROI();
});
