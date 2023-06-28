import requests
from bs4 import BeautifulSoup

URL = "https://www.google.com/search?q=fubo+stock&rlz=1C1CHZN_enUS915US915&sxsrf=APwXEddajFYniAA-B4jVKPO3Djp2bj7a9w%3A1687910513556&ei=cXibZNW4IYerptQP4NKF6A4&ved=0ahUKEwiVtcrU1OT_AhWHlYkEHWBpAe0Q4dUDCBA&uact=5&oq=fubo+stock&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIQCAAQgAQQFBCHAhCxAxCDATIOCAAQigUQsQMQgwEQkQIyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIFCAAQgAQyBQguEIAEMggIABCABBCxAzILCAAQgAQQsQMQgwEyBQgAEIAEOgoIABBHENYEELADOgoIABCKBRCwAxBDOg0IABDkAhDWBBCwAxgBOhUILhDHARDRAxCKBRDIAxCwAxBDGAI6FQguEIoFEMcBENEDEMgDELADEEMYAkoECEEYAFDuA1icCWC8CmgBcAF4AIABnQOIAZ0DkgEDNC0xmAEAoAEBwAEByAET2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

price = soup.find('div', class_="BNeawe iBp4i AP7Wnd")

print(price.text)



