interface Constants {
  SANDBOX: string
  PRODUCTION: string
  NO_NETWORK: string
  USER_CANCELLED: string
  INVALID_CONFIG: string
}

interface PayParams {
  price: string
  currency: string
  description: string
}

export interface PayResult {
  client: {
    environment: string
    paypal_sdk_version: string
    platform: string
    product_name: string
  }
  response: {
    create_time: string
    id: string
    intent: string
    state: string
  }
  response_type: string
}

interface Functions {
  initialize(environment: string, clientId: string)
  pay(params: PayParams): Promise<PayResult>
}

declare const exports: Constants & Functions

export default exports
