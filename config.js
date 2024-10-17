module.exports = {
  IDP_BASE_URL: process.env.IDP_BASE_URL ?? "https://esignet-ekyc.grz.gov.zm",
  PORT: process.env.PORT ?? 8887,
  
  // EIP - PRIVATE_KEY: process.env.PRIVATE_KEY ?? 'i1ABKyU6B3lmactkmh18cEw_6txV-4AbdFkn02TZ1vnLtPzoTjdUlYLPeLmP9cahcFQpC4_EAhPtWz5e-UZJVx52lNUjxZ423-E8_jaJomVc_K4UKDXRmzZ-u2zOU8OXClIX0IJMR-bBh0f-Cqgg-Z--Tt7VK9MXsQvw9_YaJTkKy0JXFFgnG0Ib1K_zwcs6fbSNl3R3iQXsvZ1sMkQOK8giSZLjyHQqOPgoTfEQlBO0SFr5eQqxtro84gp7n3uWf6RQqg7VQAkSWGov4r7IG4Zjpat3FTG9EdKfk2x3CEhNq8fPlosd6jkzSrtQ7SWeK_BYmP_VhIYeHRdCcjKABQ', 
  // EIP 2 - PRIVATE_KEY: process.env.PRIVATE_KEY ?? 'ewoJInAiOiAiMC00MElTeFhEbUM4U1ZydWRnMWU3dlFza3lXbG9oYWRtODNSQWtVeUg2UzRoMWFUUHJOd0xWbjlXQU5ueVJUcXVwRDFGcjhtWVo3ZjluWjJNa01qNDVVVjh1aUlqUVpyM2NyTXEwWUdrenRfTHZ3aExkdVdPSl96OV85elpOSGNrWGVpNEc4UVFGSlFZYjNUTmRHc1ZWU3dmZjY4U1NvZW44b3F2a2JrQUpzIiwKCSJrdHkiOiAiUlNBIiwKCSJxIjogIjZhczg4b2RjYlAyTURUOWxrYWhLMno0UUlIMjV6c2FfVWRMZ0F0THdEVnBla1hmSk5PUXZ1cU5ZMUd3M0p3czZ1UERMR2NFSzQyTXllT2RDRnFrbEZUdkRKbEpYTUZ2Z1dybUdiQ1VNdkpMLXJGeU8ta0NUR25GQlg2MG96ZEpiamZCdDNFM1FZeDNHOTA3Wml1dTlvMGF6ZXkxREp0cV96S3dlYXJFLXhUcyIsCgkiZCI6ICJCZ2RlaUNaYnI1cVo0aGFTaGc5dVFpblpSWVBTVVRZY181OFlndlEwV2tQS201ZklOT2dPSlB2aW1kS1lCdDhPdElXYmhvalR5bjBUS3JHUFBBcUZaQ25HWTE2SGtDVU4zMU1ibHVEMnd4WXo2U1BwWjF6c21QOFBiUVVWb3pqRUZlTHBpVE42bnVid19za1NfOUdHcmwxQ1BiMjV3VFBsWnRJM3VRNUlpUExfWUQ1al93NV9KN3RlakFhUmJobEpqNDhaRGE0Q1I4QmthVWkyUWFRbUxveWlPXzFPLVUtTmYxNy10MUM2ekZGS0tIUXgybE5sdEUxeEZRb0hCNFd1QkEyR25QNUxnTkZKU0x2MHA5NWdRSzM3blAwVFRjdWlaVmx2RmNtYkdJX2lsV2x4UktKVUQzbVpSNm56MjVYNFNhcFVXc3ducm5tN0p0VUFfVUdWR3ciLAoJImUiOiAiQVFBQiIsCgkidXNlIjogInNpZyIsCgkia2lkIjogIjFiYmRjOWRlLWMyNGYtNDgwMS1iNmIzLTY5MWFjMDc2NDFhZiIsCgkicWkiOiAicG1MX0c3VDRPRl9wcjJSQ3pra3VwaTFkQ2J3UlgzOWJNRUlzM3VpcnZrb1BSNUNFTnZ1dnNYUTBPaWFzM3RheHpMYTRuRzVKVlhIa3lPSVg4VXNLMU5GcnpaUFJLYmZOWDNoNUVBbmwzSTdjWk10b1lKTG5hd1VxYU5UdWtPbURDaFBsS3gxZlZqVXdzeU5uNUhTQW5tQmlhT21tX1JIbzM2dFBoZ2FQVXRFIiwKCSJkcCI6ICJlM2IyWDYwWk9vTVlyaE9QZ0s3aGM0eEV1NlRmRGNMbkp2R01waW54dllXVkN5Tmd2TktFczZjTmRNem5GYnBkMVRyRnplNm1TWkRwSVFoNmEyVzU3c2ZYOVotS2piNEQ4VDVJWmk5eGZTellOMk1qWVRmZ0dEVDNTSzlGWnFMc1FNTFYzTEpYWVdHUy1wNUFBY2FaQTAxSFZOLW1pV2xFVmdyTlFfVEF0NmsiLAoJImRxIjogIllnLUJxVW9UQ0k0eTZ4QlM0SmllcVhsWExUdDE4WWZJbkY4QnNVMnlmZmdSdmJ4bVRQTUI4TEpDUWdzVDdpZXhRaEdUT2tDZ0FDTU4tRjBjaUFQOTB2WmNoRVdEMzRCX0c3UEY3TFp6ck9PSFN2QWc5SGFMQlVySUk0MjRsUC1WZW5DT3VpaFJybmE5bS1XVU44LU1xdXV0d0tDVEVNZzJPMzl6MkZSX3dpYyIsCgkibiI6ICJ3WEdRQTU3NENVLVdUV1BJTGQ0UzNfMXNKZjBZb2Ywa3dNZU5jdFhjMXRoUW83MExqZm45ZjRpZ3BSZTdmOHFOc19XNmRMdUxXZW1GaEdKQlFCUTd2dmlja0VDS05KZm9fRXpTRF95eVBDZzdrX0FHYlRXVGt1b09iSHJwaWx3Skd5S1ZTa09JdWpIX0ZxSElWa3drVlhqV2MyNUxzYjhHcTRuQUhOUUVxcWdhWVBMRWk1ZXZDUjZTMEZ6Y1hUUHVSaDl6SC1jTTBPbmp2NG9ycmZZcEVyNjFIY1JwNU1YTDU1Yjd5Qm9JWWxYRDhOZmFsY2dkcld6cDRWWkh2UTh5VDlHNWVhZjI3WFVuNlpCZUJmN1ZuRUxjS0ZUeXcxcEsyd3FvT3hSQmM4WTF3TzZyRXk4UGxDVTZ3RC1tYkl6Y2pHMXdVZm5iZ3ZKT000QTVHNDFxdVEiCn0',
  
  // EIP 3 - 
  PRIVATE_KEY: process.env.PRIVATE_KEY ?? 'MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCwCL1+nNHnpxzO\n9IvLYBjXbmSqcmbm8vqxR2L2xCMR61jkReB7CrxqrdkSbo6HToLMa9DrdY0pYYww\nSV/F4sIFc69G6Sbg6u68L6g9+j5+rpfkvjAbiJQjH1hWERdep0R3PYQTJIaO8+wN\nI5nuN/FPgXOWu2JQMnaE0z8hW3A1FxGvoWU5WS+jiIGSSdjf7G+rrv0MM74bHNA3\nEAPHnKg1/CuWKwWNvr1bXEBc8vbBj6iEOIKfbvLlFiMwF7mjIOT3R4vXjc/+jDjf\n2xzdVEPwUZdB+qM2YemQaov9MiK969f42gWMneTZZuYkt+mSi3gItnyvBjEkMTsv\npuPD5VlBAgMBAAECggEBAIKSuRyFbh2Kk4/fTSJZ8ZM6y2iy2ylL6jA9Z2brLahJ\nDfKk8lHSMNhgg7dsUkSDM/o1rw44b7DWLopSorvB63Dn0oeiwbfsC5GDOCRgzqJh\nF0IQ4NZLhLZYtcmBe/g10k8wTht06Gp4/Ary8WcGD/SNbRPNgqtCAy+bEiTIEn8N\nkgvZ/3VTOBTXm/3BcsR4Yc4njf9mFLohBIXaY3oDchxz8K2m1jqf6xigZzcO4iXy\nk0EwmLSVBCL/I+w0e2xxY3fMYz1n3SiI3v0FzH3dYO2aq3qzT6dcjvjvt1OJi4JF\nF7sDMjDfRl0B2OAvApM+6Cixm8jixX2tCUhn2EI+cZECgYEA+6+VRzDBJp8Jdbxk\nGUcuot/K3XYotjhZCoFuP5VGZSJcjFDlTDwIyQZU37Db8s3CsAvudt0BLBH8Bk91\n4EEKu04zkh+NWlBd1kkViDqpVsIfEJ3Fq7tOmZ1erPzOLMUOko+/NNKb4CKziFUt\nYTycnaECdH2HNW9LBWL8PN887P8CgYEAsw0xBsK1PqCGScI8iFAHxHZnNWTFr1l5\n/VOPZBN2Mg6Oo1Pk058R/5PuSlNKeGTZ9hHaI9SOdyL2WbysLD89vm9BiylVvMWY\nMiaunK8WBqyWiSQTi62mmxm/zgxfKcASEegcHXGvUnu33UivZwU545IDVpqzds6F\nkg421ZqUeb8CgYEA5/olGBHK5YMOYBM9G8NtK7gjrk27JoD3KOS1LiuzT4IFVVs2\njTaETmzki6zifX/DIypMKAh5jRoiddqFZiXs80kX5WXpjkWmx9xi2UZgUFPp+BHD\nYQ7qWlIfMkhs6/zQ+qs9bD12aHbzjQQdKJOKMwt1TNNqbQjgV92taZnE+RcCgYBV\nS49zXQXiU64lLPaRKS7KFG2OLfdOVR2b5FaGog7IQc8JV0nG1hxI2DvIBG2RdNmw\nM0jrkLJdZrZcgVizq1zKf02F8ab6Slb6bRr5YR7pBwafRiRZgdvAPz/z9EjRJsJ0\n7VGXZTTT4kPwklOcjAzLsB8O/ptHmZJfxY2xq/XXGQKBgQDtGLwTixHg08CXryzv\ncrBZHyzKKjCEeiw9k0uyoryp2V2ANP3/t9OSvTm2NBI9+WUOOTAJeUOW/sds0ZCS\nofnvQhN18PjtCSdV9lX3qh9oTY2Gg70lWVbrloLyhq+DKvqZCpObyw8vPmW5bUqV\nT+Fw0xdm31InLgGPRsZULMJMUQ==',
  IDP_AUD_URL: process.env.IDP_AUD_URL ?? "https://esignet-ekyc.grz.gov.zm/v1/esignet/oauth/v2/token",
  CLIENT_ASSERTION_TYPE: process.env.CLIENT_ASSERTION_TYPE ?? "urn:ietf:params:oauth:client-assertion-type:jwt-bearer"
};