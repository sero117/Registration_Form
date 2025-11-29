document.addEventListener('DOMContentLoaded', () => {
    const modeBtn = document.getElementById('modeToggle');
    const body = document.body;
  
    modeBtn.addEventListener('click', () => {
      const light = body.classList.toggle('light-mode');
      modeBtn.textContent = light ? '☀️' : '🌙';
    });
  
    
    const form = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const strengthText = document.getElementById('passwordStrength');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;
  
      const name = document.getElementById('name').value.trim();
      document.getElementById('nameError').textContent = name ? "" : "الاسم مطلوب";
      if (!name) valid = false;
  
      const email = document.getElementById('email').value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
      document.getElementById('emailError').textContent = emailPattern.test(email) ? "" : "أدخل بريد إلكتروني صحيح";
      if (!emailPattern.test(email)) valid = false;
  
      const password = passwordInput.value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      document.getElementById('passwordError').textContent = password.length < 6 ? "كلمة المرور يجب أن تكون 6 أحرف على الأقل" : "";
      if (password.length < 6) valid = false;
  
      document.getElementById('confirmError').textContent = password !== confirmPassword ? "كلمة المرور غير متطابقة" : "";
      if (password !== confirmPassword) valid = false;
  
      if (valid) {
        alert("تم التسجيل بنجاح ✅");
        form.reset();
        strengthText.textContent = "";
      }
    });
  
    passwordInput.addEventListener('input', function() {
      const value = passwordInput.value;
      let strength = "";
      if (value.length < 6) {
        strength = "ضعيفة";
        strengthText.className = "strength weak";
      } else if (/[A-Z]/.test(value) && /\d/.test(value) && value.length >= 8) {
        strength = "قوية";
        strengthText.className = "strength strong";
      } else {
        strength = "متوسطة";
        strengthText.className = "strength medium";
      }
      strengthText.textContent = "قوة كلمة المرور: " + strength;
    });
  });
  
  function togglePassword(id, el) {
    const input = document.getElementById(id);
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    el.textContent = isHidden ? "🙈" : "👁️";
  }