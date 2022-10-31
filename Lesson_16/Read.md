# Lesson 16 - Integration
## Implementing the dApp using Angular (review)
* Creating the project
* Modules
* Creating components and defining routes for each page
* Generating a wallet and storing at memory on login
* Reading blockchain data on page load
* Displaying values in HTML using Angular directives
* Reactive features in the page
* Button actions and events
* Improving the page visuals with bootstrap
### References
https://angular.io/cli

https://angular.io/guide/reactive-forms
## Coupling frontend and APIs
* On-chain and off-chain features
* Keeping user Private Key private
* Authentication methods
* Using signatures as a form of authentication
* Mapping interactions, resources and payloads
* Handling errors
### References
https://en.wikipedia.org/wiki/Loose_coupling

https://angular.io/guide/http
## Auth methods for the Web3.0
* Consuming services from API
* Authentication and authorization
* Elliptic encryption
* Signing messages
* Message signature in body
* Verifying signatures
### References
https://en.wikipedia.org/wiki/Authentication_protocol

https://dev.to/lparvinsmith/signatures-as-authentication-in-web3-3kod

https://docs.ethers.io/v5/api/signer/#Signer-signMessage

https://docs.ethers.io/v5/api/utils/signing-key/#utils-verifyMessage
## Voting dApp integration guidelines
* Single POST method:
  * Request voting tokens from API passing my data (name, id, etc.) and signature
* Use these tokens to interact with the tokenized ballot
* All other interactions must be made directly on-chain
# Homework
* Create Github Issues with your questions about this lesson
* Finish the integration
# Weekend Project
* Form groups of 3 to 5 students
* Complete the projects together
* Create a voting dApp to cast votes, delegate and query results on chain
* Request voting tokens to be minted upon claim
* (bonus) Store a list of recent votes in the backend and display that on frontend