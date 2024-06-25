const employeeData = [
    {
      position: "Dispatch Supervisor",
      companyName: "Natuflores",
      city: "Goiânia",
      country: "BR",
      startDate: "2021-02-16",
      endDate: "2022-03-01",
      duties: [
        "Picking and sending orders to customers",
        "Logistics control",
        "Production assistant",
        "Stock organization"
      ]
    },
    {
      position: "Front attendant/Supplier",
      companyName: "GALP TROFA",
      city: "Portugal",
      country: "PT",
      startDate: "2019-01-01",
      endDate: "2019-06-15",
      duties: [
        "Refueling customer vehicles",
        "Washing and drying",
        "Inventory supply"
      ]
    },
    {
      position: "Production Assistant",
      companyName: "DECOR",
      city: "Goiânia",
      country: "BR",
      startDate: "2012-10-01", 
      endDate: "2013-07-01",
      duties: [
        "Production of construction parts and materials",
        "Inventory control, sending orders to the customer"
      ]
    },
    {
      position: "Administrative Assistant",
      companyName: "Nuclear CDI",
      city: "Goiânia",
      country: "BR",
      startDate: "2013-10-01", 
      endDate: "2016-07-09",
      duties: [
        "Charging for services provided",
        "Contract renewal negotiation",
        "Customer service",
        "Invoice Control"
      ]
    },
    {
      position: "Administrative Assistant",
      companyName: "CEBRAMEN",
      city: "Goiânia",
      country: "BR",
      startDate: "2018-03-08",
      endDate: "2019-07-07",
      duties: [
        "Charging for services provided",
        "Invoice Control",
        "Typist",
        "Accounts payable control"
      ]
    }
  ];
  

let container = document.querySelector('.experience');

employeeData.forEach((position) => {
    container.innerHTML += `
                    <div class="experience__function">
                    <h2>${position.position} - ${position.companyName} - ${position.city} - ${position.country}</h2>
                    <p class="period">Date: ${position.startDate} to ${position.endDate}</p>
                    <ul>
                         ${position.duties.map((duty) => {
                    return `<li class="items">${duty}</li>`;
                }).join('')}
                    </ul>
                    </div>
    `;
});

