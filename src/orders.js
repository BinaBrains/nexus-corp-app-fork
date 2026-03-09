const orders = [
  {
    id: "ORD-1001",
    customer: "Alice Martin",
    destination: "12 Rue de Rivoli, Paris, France",
    status: "in_transit",
    weight_kg: 2.4,
    carrier: "DHL",
    estimatedDelivery: "2026-03-12",
  },
  {
    id: "ORD-1002",
    customer: "Bob Nguyen",
    destination: "47 Queen Street, London, UK",
    status: "pending",
    weight_kg: 0.8,
    carrier: "UPS",
    estimatedDelivery: "2026-03-14",
  },
  {
    id: "ORD-1003",
    customer: "Clara Schmidt",
    destination: "Unter den Linden 5, Berlin, Germany",
    status: "delivered",
    weight_kg: 5.1,
    carrier: "FedEx",
    estimatedDelivery: "2026-03-08",
  },
];

module.exports = orders;
