# RelayOS public offering evidence

## BLUF

Public RelayOS copy may describe the capability that is implemented today, but
must not imply that a commercial package, price, trial, support commitment, or
general availability has been announced.

## Verified capability vocabulary

| Public statement | Implementation evidence | Release boundary |
| --- | --- | --- |
| RelayBNC maintains a persistent IRC connection. | [`test_staging_kiwibnc_persistence.py`](https://github.com/relayos/relayos-deploy/blob/main/tests/integration/test_staging_kiwibnc_persistence.py) | Available as a staged capability; public packaging is not yet announced. |
| Browser access is provided through KiwiIRC. | [`kiwibnc_oauth.py`](https://github.com/relayos/relayos-deploy/blob/main/scripts/staging_integration/kiwibnc_oauth.py) | Access and eligibility are environment-controlled. |
| Offline direct messages are entitlement-gated and available after reconnect. | [`test_staging_kiwibnc_offline_messaging.py`](https://github.com/relayos/relayos-deploy/blob/main/tests/integration/test_staging_kiwibnc_offline_messaging.py) | Do not imply that every user can send messages or that a paid plan is on sale. |
| Authentication integrates OAuth, SASL, and NickServ recognition. | [`kiwibnc_oauth.py`](https://github.com/relayos/relayos-deploy/blob/main/scripts/staging_integration/kiwibnc_oauth.py) | Client and tenant configuration determine the exact login path. |

## Current release boundary

RelayOS is preparing the consumer RelayBNC offering. This site may invite
prospective users to follow the release or contact RelayOS, but it must not
promise checkout, a free trial, pricing, a service level agreement, a support
response time, customer references, API availability, or a particular account
eligibility outcome.

## Retired template claims

The previous template advertised fictional product families, customer logos and
testimonials, a public API and SDK catalog, company history and funding, scale
figures, a free trial, and uptime/support commitments. Those claims are
not evidence-backed and are intentionally absent from the public site.

## Maintainer rule

Before adding a public capability claim, add its implementation or integration
test evidence to this document. If the claim depends on commercial packaging,
state the release boundary instead of inventing availability details.
