const columnsList = {
  user: {
    id: " id ",

    username: " username ",
    password_hash: " password_hash ",
    full_name: " full_name ",
    contact_information: " contact_information ",
    job_title_id: " job_title_id ",

    created_by: " created_by ",
    created_at: " created_at ",
    updated_by: " updated_by ",
    updated_at: " updated_at ",
    deleted_by: " deleted_by ",
    deleted_at: " deleted_at ",
  },

  jobTitle: {
    id: " id ",

    title: " title ",
    permission_level: " permission ",

    created_by: " created_by ",
    created_at: " created_at ",
    updated_by: " updated_by ",
    updated_at: " updated_at ",
    deleted_by: " deleted_by ",
    deleted_at: " deleted_at ",
  },

  client: {
    id: " id ",

    first_name: " first_name ",
    last_name: " last_name ",
    document: " document ",
    client_type: " client_type ",
    zip_code: " zip_code ",
    address: " address ",
    city: " city ",
    state: " state ",
    phone_ddd: " phone_ddd ",
    phone_number: " phone_number ",
    email: " email ",

    created_by: " created_by ",
    created_at: " created_at ",
    updated_by: " updated_by ",
    updated_at: " updated_at ",
    deleted_by: " deleted_by ",
    deleted_at: " deleted_at ",
  },

  supplier: {
    id: " id ",

    name: " name ",
    document: " document ",
    zip_code: " zip_code ",
    address: " address ",
    city: " city ",
    state: " state ",
    accountable_name: " accountable_name ",
    accountable_phone_ddd: " accountable_phone_ddd ",
    accountable_phone: " accountable_phone ",
    accountable_email: " accountable_email ",
    accountable_department: " accountable_department ",

    created_by: " created_by ",
    created_at: " created_at ",
    updated_by: " updated_by ",
    updated_at: " updated_at ",
    deleted_by: " deleted_by ",
    deleted_at: " deleted_at ",
  },
  productsGroup: {
    id: " id ",

    name: " name ",
    description: " description ",

    created_by: " created_by ",
    created_at: " created_at ",
    updated_by: " updated_by ",
    updated_at: " updated_at ",
    deleted_by: " deleted_by ",
    deleted_at: " deleted_at ",
  },
  product: {
    id: " id ",

    name: " name ",
    description: " description ",
    quantity_in_stock: " quantity_in_stock ",
    bar_code: " bar_code ",
    unit_of_measurement: " unit_of_measurement ",
    price_per_unit: " price_per_unit ",
    can_sell_fractioned: " can_sell_fractioned ",
    product_group_id: " product_group_id ",

    created_by: " created_by ",
    created_at: " created_at ",
    updated_by: " updated_by ",
    updated_at: " updated_at ",
    deleted_by: " deleted_by ",
    deleted_at: " deleted_at ",
  },
  lotsAndExpirationDates: {
    id: " id ",

    product_id: " product_id ",
    supplier_id: " supplier_id ",
    lot: " lot ",
    expiration_date: " expiration_date ",

    created_by: " created_by ",
    created_at: " created_at ",
    updated_by: " updated_by ",
    updated_at: " updated_at ",
    deleted_by: " deleted_by ",
    deleted_at: " deleted_at ",
  },
  paymentMethod: {
    id: " id ",

    name: " name ",
    description: " description ",
    can_installment: " can_installment ",

    created_by: " created_by ",
    created_at: " created_at ",
    updated_by: " updated_by ",
    updated_at: " updated_at ",
    deleted_by: " deleted_by ",
    deleted_at: " deleted_at ",
  },
  saleHeader: {
    id: " id ",

    client_id: " client_id ",
    payment_method_id: " payment_method_id ",
    total_value: " total_value ",
    paid_value: " paid_value ",
    total_installment_value: " total_installment_value ",
    number_of_installments: " number_of_installments ",

    created_by: " created_by ",
    created_at: " created_at ",
    updated_by: " updated_by ",
    updated_at: " updated_at ",
    deleted_by: " deleted_by ",
    deleted_at: " deleted_at ",
  },
  saleItens: {
    id: " id ",

    sale_header_id: " sale_header_id ",
    product_id: " product_id ",
    quantity: " quantity ",
    price_per_unit: " price_per_unit ",
    itens_total_value: " itens_total_value ",

    created_by: " created_by ",
    created_at: " created_at ",
    updated_by: " updated_by ",
    updated_at: " updated_at ",
    deleted_by: " deleted_by ",
    deleted_at: " deleted_at ",
  },
  accountsPayable: {
    id: " id ",

    supplier_id: " supplier_id ",
    description: " description ",
    due_date: " due_date ",
    due_value: " due_value ",
    paid: " paid ",

    created_by: " created_by ",
    created_at: " created_at ",
    updated_by: " updated_by ",
    updated_at: " updated_at ",
    deleted_by: " deleted_by ",
    deleted_at: " deleted_at ",
  },
  accountsReceivable: {
    id: " id ",

    sale_header_id: " sale_header_id ",
    client_id: " client_id ",
    installment_number: " installment_number ",
    paid: " paid ",

    created_by: " created_by ",
    created_at: " created_at ",
    updated_by: " updated_by ",
    updated_at: " updated_at ",
    deleted_by: " deleted_by ",
    deleted_at: " deleted_at ",
  },
};
