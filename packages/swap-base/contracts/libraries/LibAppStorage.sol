// SPDX-License-Identifier: MIT
pragma solidity =0.7.6;
pragma experimental ABIEncoderV2;

import {LibDiamond} from "./LibDiamond.sol";
import "./PoolAddress.sol";

address constant NUSD = 0xab151cD390C6b0eB41A4a45E1E372972C3067b1a;
address constant NEURO = 0xB59C984a529490fde6698702342b292840743bb8;

/// @dev Used as the placeholder value for amountInCached, because the computed amount in for an accurate output swap
/// can never actually be this value
uint256 constant DEFAULT_AMOUNT_IN_CACHED = type(uint256).max;

struct Spot {
  // the nonce for permits
  uint96 nonce;
  // the address that is approved for spending this token
  address spender;
  // the ID of the pool with which this token is connected
  uint80 poolId;
  // the tick range of the position
  int24 markLower;
  int24 markUpper;
  // the liquidity of the position
  uint128 liquidity;
  // the fee growth of the aggregate position as of the last action on the individual position
  uint256 feeGrowthInside0LastX128;
  uint256 feeGrowthInside1LastX128;
  // how many uncollected tokens are owed to the position, as of the last computation
  uint128 tokensOwed0;
  uint128 tokensOwed1;
}

// central storage shared with all the facets (contracts)
struct AppStorage {
  mapping(uint80 => PoolAddress.Pool) _poolIdToPool;

  mapping(uint256 => Spot) _spots;

  // @dev Transient storage variable used to check a safety condition in exact output swaps. --> Quoter.sol
  uint256 amountOutCached;

  address factory;
  address WETH9;

  // @dev A null-terminated string
  bytes32 nativeCurrencyLabelBytes;

  // @dev Transient storage variable used for returning the computed amount in for an accurate output swap.
  uint256 amountInCached;
}

library LibAppStorage {
  function diamondStorage() internal pure returns (AppStorage storage ds) {
    assembly {
      ds.slot := 0
    }
  }
}

// uint256 private amountInCached = DEFAULT_AMOUNT_IN_CACHED;
// AppStorage storage s = LibAppStorage.diamondStorage();