let lang = "en";

const texts = {
  en: {
    title: "ROI Calculator",
    subtitle: "Calculate Your Return on Investment",
    laborLabel: "Monthly Labor Cost",
    laborDesc: "Enter the total monthly salary you currently pay to workers.",
    machineLabel: "Machine Cost",
    machineDesc: "Enter the price of the machine you plan to purchase.",
    calcBtn: "Calculate ROI",
    resetBtn: "Reset",
    infoTitle: "How it works:",
    infoText:
      "This calculator estimates your ROI by assuming a 66% reduction in labor costs. Payback Period = Machine Cost ÷ Monthly Savings.",
    alert: "Please enter valid positive numbers!",
    roiLabel: "Expected ROI",
    roiNote: "Based on 66% labor cost reduction over 12 months",
    paybackLabel: "Payback Period",
    month: "months"
  },
  ar: {
    title: "حاسبة العائد على الاستثمار",
    subtitle: "احسب عائد استثمارك",
    laborLabel: "راتب العمال الشهري",
    laborDesc: "أدخل إجمالي المرتبات الشهرية التي تدفعها حالياً للعمال.",
    machineLabel: "سعر الماكينة",
    machineDesc: "أدخل سعر الماكينة التي تخطط لشرائها.",
    calcBtn: "احسب العائد",
    resetBtn: "إعادة تعيين",
    infoTitle: "كيفية الحساب:",
    infoText:
      "الحاسبة تفترض توفير 66% من تكلفة العمالة الشهرية. فترة الاسترداد = سعر الماكينة ÷ التوفير الشهري.",
    alert: "من فضلك أدخل أرقام صحيحة وموجبة في كلا الحقلين.",
    roiLabel: "العائد المتوقع",
    roiNote: "بناءً على توفير 66% من تكلفة العمالة على مدار 12 شهر",
    paybackLabel: "فترة الاسترداد",
    month: "شهر"
  }
};

function setLanguage(l) {
  lang = l;
  const t = texts[lang];
  document.getElementById("title").textContent = t.title;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("laborLabel").textContent = t.laborLabel;
  document.getElementById("laborDesc").textContent = t.laborDesc;
  document.getElementById("machineLabel").textContent = t.machineLabel;
  document.getElementById("machineDesc").textContent = t.machineDesc;
  document.getElementById("calcBtn").textContent = t.calcBtn;
  document.getElementById("resetBtn").textContent = t.resetBtn;
  document.getElementById("infoTitle").textContent = t.infoTitle;
  document.getElementById("infoText").textContent = t.infoText;

  document.getElementById("enBtn").classList.toggle("active", lang === "en");
  document.getElementById("arBtn").classList.toggle("active", lang === "ar");
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
}

function calculateROI() {
  const labor = parseFloat(document.getElementById("laborCost").value);
  const machine = parseFloat(document.getElementById("machineCost").value);

  if (isNaN(labor) || isNaN(machine) || labor <= 0 || machine <= 0) {
    alert(texts[lang].alert);
    return;
  }

  const monthlySavings = labor * 0.66;
  const roi = ((monthlySavings * 12) / machine) * 100;
  const payback = machine / monthlySavings;

  document.getElementById("result").innerHTML = `
    <div class="result-box">
      <h3>${texts[lang].roiLabel}: ${roi.toFixed(2)}%</h3>
      <p>${texts[lang].roiNote}</p>
      <h3>${texts[lang].paybackLabel}: ${payback.toFixed(1)} ${texts[lang].month}</h3>
    </div>
  `;
}

function resetForm() {
  document.getElementById("laborCost").value = "";
  document.getElementById("machineCost").value = "";
  document.getElementById("result").innerHTML = "";
}

document.getElementById("calcBtn").addEventListener("click", calculateROI);
document.getElementById("resetBtn").addEventListener("click", resetForm);
document.getElementById("enBtn").addEventListener("click", () => setLanguage("en"));
document.getElementById("arBtn").addEventListener("click", () => setLanguage("ar"));

setLanguage("en");
