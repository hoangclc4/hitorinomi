import gql from 'graphql-tag';

export const ADMIN_RESTAURANT_LIST = gql`
  query adminRestaurantList(
    $pager: PagerCondition!
    $filter: RestaurantFilter
  ) {
    result: adminRestaurantList(pagerCondition: $pager, filter: $filter) {
      response {
        adminRestaurantList {
          isVip
          restaurantId
          defaultId
          name
          address
          addressLevelOne
          addressLevelTwo
          addressLevelThree
          specificAddress
          phone
          email
        }
        pager {
          totalCount
        }
      }
      error {
        requestResolved
        message
        errorCode
      }
    }
  }
`;
