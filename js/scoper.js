/**
 * AushviM Technologies - Project Scoper & Consultation Booking
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('scoper-form');
  const serviceChips = document.querySelectorAll('.service-chip');
  const platformChips = document.querySelectorAll('.platform-chip');
  const modal = document.getElementById('success-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalDetails = document.getElementById('modal-summary-details');

  let selectedService = document.querySelector('.service-chip.selected')?.getAttribute('data-val') || 'NCM Calm & FinOps Automation';
  let selectedPlatform = document.querySelector('.platform-chip.selected')?.getAttribute('data-val') || 'Nutanix AHV Private Cloud';

  // Service chip selector
  serviceChips.forEach(chip => {
    chip.addEventListener('click', () => {
      serviceChips.forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      selectedService = chip.getAttribute('data-val');
    });
  });

  // Platform chip selector
  platformChips.forEach(chip => {
    chip.addEventListener('click', () => {
      platformChips.forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      selectedPlatform = chip.getAttribute('data-val');
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('input-name').value.trim();
      const email = document.getElementById('input-email').value.trim();
      const company = document.getElementById('input-company').value.trim();
      const clusterSize = document.getElementById('input-clusters').value;
      const notes = document.getElementById('input-notes').value.trim();

      if (!name || !email || !company) {
        alert('Please fill out all required fields (Name, Work Email, Company).');
        return;
      }

      // Populate confirmation modal
      if (modalDetails) {
        modalDetails.innerHTML = `
          <div style="text-align: left; background: rgba(6, 11, 19, 0.7); padding: 1rem; border-radius: 8px; font-size: 0.85rem; line-height: 1.6; margin-bottom: 1.5rem; border: 1px solid var(--border-light);">
            <div><strong>Contact:</strong> ${name} (${company})</div>
            <div><strong>Email:</strong> ${email}</div>
            <div><strong>Focus Track:</strong> <span style="color: var(--accent-emerald);">${selectedService}</span></div>
            <div><strong>Environment:</strong> <span style="color: var(--accent-cyan);">${selectedPlatform}</span></div>
            <div><strong>Estimated Workload:</strong> ${clusterSize}</div>
            ${notes ? `<div><strong>Scope Notes:</strong> ${notes}</div>` : ''}
          </div>
        `;
      }

      // Show modal
      if (modal) {
        modal.classList.add('active');
      }

      // Reset form
      form.reset();
    });
  }

  // Close modal
  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Close on outside click
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});
